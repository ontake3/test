'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(500, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.write(req.headers['user-agent']);
    res.end();
});
const port = 8000;
server.listen(port, () => {
    console.log('Listening on ' + port);
});