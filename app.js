'use strict';
const validator=require('./lib/validator');
module.exports = app => {
    validator(app);
};
