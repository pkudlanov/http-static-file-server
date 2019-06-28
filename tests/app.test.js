const request = require('supertest');
const app = require('../lib/app');
const { getFilePath } = require('../lib/utils/filePath');

describe('app static server', () => {
    it('get a file path from url path', () => {
        const filePath = getFilePath('/index.html');
        expect(filePath).toEqual('./public/index.html');
    });

    it('gets an index.html if we request it', () => {
        return request(app)
            .get('/index.html')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('<h1>Greetngs to all Far and Near!!!</h1>'));
            });
    });
});
