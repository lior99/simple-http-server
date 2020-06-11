const http = require('http');
const fs = require('fs');
const PORT = 8080;
const mimeTypes = require('./mimeTypes.json');

const getMimeType = extension => {
    return mimeTypes[extension];
}

const server = http.createServer((req, res) => {
    let fileName = req.url === '/' ? 'index.html' : req.url.split('/').pop();

    fs.readFile(`${__dirname}/client/${fileName}`, (err, content) => {
        if (err) {
            console.log('err', err);
            res.writeHead(404);
            res.end();
            return;
        }

        res.setHeader('Content-Type', getMimeType(fileName.split('.').pop()));
        res.writeHead(200);
        res.write(content);
        res.end();
    })

});

server.listen(PORT);
console.log(`server is listening on port ${PORT}`);
