const { getFilePath } = require('../lib/utils/filePath');

describe('app static server', () => {
    it('get a file path from url path', () => {
        const filePath = getFilePath('./index.html');
        expect(filePath).toEqual('./public/index.html');
    });
});
