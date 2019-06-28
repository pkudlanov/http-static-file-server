const path = require('path');

const getFilePath = pathname => {
    return path.join(__dirname, '../../public', path.normalize(pathname));
};

module.exports = {
    getFilePath
};
