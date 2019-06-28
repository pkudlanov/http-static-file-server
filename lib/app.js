const { createServer } = require('http');
const fs = require('fs');
const { parse } = require('url');
const { getFilePath } = require('./utils/filePath');

const app = createServer((req, res) => {
    const { pathname } = parse(req.url);
    fs.readFile(getFilePath(pathname), { encoding: 'utf8' }, (err, content) => {
        if(err && err.code === 'ENOENT') {
            console.log(err);
            res.statusCode = 404;
            res.end('Not Found');
        }
        res.end(content);
    });
});

module.exports = app;
