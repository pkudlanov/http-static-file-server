const { createServer } = require('http');

const app = createServer((req, res) => {
    res.end('Created server app');
});

module.exports = app;
