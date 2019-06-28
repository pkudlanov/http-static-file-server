const request = require('supertest');
const app = require('../lib/app');
const { getFilePath } = require('../lib/utils/filePath');

describe('app static server', () => {
    it('get a file path from url pathname', () => {
        const filePath = getFilePath('/index.html');
        expect(filePath).toEqual(expect.stringContaining('/public/index.html'));
    });

    it('get a file path from url pathname but stays in public', () => {
        const filePath = getFilePath('/../index.html');
        expect(filePath).toEqual(expect.stringContaining('/public/index.html'));
    });

    it('gets an index.html if we request it', () => {
        return request(app)
            .get('/index.html')
            .then(res => {
                expect(res.status).toEqual(200);
                expect(res.text).toEqual(expect.stringContaining('<h1>Greetings to all Far and Near</h1>'));
            });
    });

    it('responds with not found if we request a nonexistant path', () => {
        return request(app)
            .get('/none-existant-path')
            .then(res => {
                expect(res.status).toEqual(404);
                expect(res.text).toEqual('Not Found');
            });
    });
});
