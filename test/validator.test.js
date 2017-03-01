'use strict';

const request = require('supertest');
const mm = require('egg-mock');

describe('test/validator.test.js', () => {
    let app;
    before(() => {
        app = mm.app({
            baseDir: 'apps/validator-test',
        });
        return app.ready();
    });

    after(() => app.close());
    afterEach(mm.restore);

    it('should GET /', () => {
        return request(app.callback())
            .get('/')
            .expect(400)
            .expect('缺少参数"num"')


    });
});
