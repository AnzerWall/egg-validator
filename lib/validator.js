'use strict';
/**
 * Created by anzer on 2017/2/28.
 */
const path = require('path');
const Joi = require('joi');

function convertSchemaToHook(schema) {
    return function *validateLayer(next) {
        const {request:req}=this;
        const config = this.app.config.validator;

        const result = this.v = this.validator = {
            body: req.body,
            query: req.query,
            params: this.params,
            header: this.header,
            get headers() {
                return this.header;
            }
        };
        let languageConfig = {};
        if (config.i18n.enable) {
            const locale = (this.__getLocale && this.__getLocale()) || config.i18n.defaultLocale;
            languageConfig = config.i18n.locales[locale] || {};
        }
        const keys = ['query', 'body', 'header', 'params'];
        for (let key of keys) {
            if (schema[key]) {
                const {value, error}=Joi.validate(result[key], schema[key], Object.assign({}, config.options[key], {language: languageConfig}));
                if (error && error.details && error.details.length) {
                    const message = error.details[0].message;
                    if (config.pretty) {
                        return this.fail({details: error.details, _object: {}}, config.code, message);
                    } else {
                        this.body = message;
                        this.status = config.code;
                        return;
                    }
                }
                result[key] = value;
            }
        }
        yield *next;
    }
}

module.exports = app => {
    const directory = path.join(app.config.baseDir, 'app/validator');
    const config = app.config.validator;
    app.loader.loadToApp(
        directory,
        'validator',
        {call: false}
    );
    app.Joi = Joi;

    app.beforeStart(function () {
        const Joi = app.Joi;//允许指定Joi，Joi是对象，不宜放在config中
        const controllerKeys = Object.keys(app.validator);
        controllerKeys.forEach(controllerKey => {
            const schemas = app.validator[controllerKey] = app.validator[controllerKey](Joi);
            const actionKeys = Object.keys(schemas);
            actionKeys.forEach(actionKey => {
                app.actionHook(controllerKey, actionKey, convertSchemaToHook(schemas[actionKey]));//根据schema，添加action hook
            })
        })
    });
}