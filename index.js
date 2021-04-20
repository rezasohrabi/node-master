/*module wrapper function
(function (exports, require, module, __filename, __dirname) {
    
})*/

const path = require('path');
const fs = require('fs');
const http = require('http');

const getFilePath = (req) => {
    return filePath = path.join(
        __dirname,
        'public',
        req.url === '/'? 'index.html' : req.url
    );
}

const getContentType = (extname) => {
    switch(extname) {
        case '.js':
            return 'text/javascript'; 
        case '.css':
            return 'text/css';
        case '.json':
            return 'application/json';
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpg';
        default:
            return 'text/html';
    }
}

const isPageNotFound = (error) => {
    return error.code == 'ENOENT';
}

const server = http.createServer((req, res) => {
    let filePath = getFilePath(req);
    const extname = path.extname(filePath);
    const contentType = getContentType(extname);

    if(contentType == 'text/html' && extname == '') filePath += '.html';

    fs.readFile(filePath, (error, content) => {
        if(error) {

            if(isPageNotFound) {
                fs.readFile(
                    path.join(__dirname, 'public', '404.html'),
                    (error, content) => {
                        res.writeHead(404, { 'Content-Type': 'text/html'});
                        res.end(content, 'utf8')
                    }
                )
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${error.code}`);
            }

        } else {

            res.writeHead(200, { 'Content-Type': contentType});
            res.end(content, 'utf8');

        }

    });
});


const PORT = process.env.PORT || 3000;
server.listen(
    PORT, 
    () => { console.log(`server running on port ${PORT}`) } 
)
