'use strict';

/**
 * validator default config
 * @member Config#validator
 * @property {String} SOME_KEY - some description
 */

exports.validator = {
    pretty: false, // use egg-pretty
    code: 400, // egg-pretty code or http status code
    safe: false, // 暂时不使用的参数
    i18n: {
        enable: false,
        defaultLocale: 'en-US',
        locales: {
            'en-US': {},
        },
    },
    options: {
        query: {allowUnknown: true},
        body: {allowUnknown: false},
        params: {allowUnknown: false},
        header: {allowUnknown: true},
        queries: {allowUnknown: true},

    },
};
