const path = require('path');

const getBaseFileName = () => {
    return path.basename(__filename);
}

const getDirectoryName = () => {
    return path.dirname(__filename);
}

const getFileExtention = () => {
    return path.extname(__filename);
}

const createPathObject = () => {
    return path.parse(__filename);
}

const join = (folder, name) => {
    return path.join(__dirname, folder, name);
}

console.log('getBaseFileName:', getBaseFileName());
console.log('getDirectoryName:', getDirectoryName());
console.log('getFileExtention:', getFileExtention());
console.log('createPathObject:', createPathObject());
console.log('join', join('test', 'test.js'));