const http = require('http');
const fs = require('fs');

const port = 20001;


function requestHandler(req, res) {
    console.log(req.url);
    res.writeHead(200, { 'content-type': 'text/html' });

    let filepath;
    switch (req.url) {
        case '/':
            filepath = './index.html';
            break;
        case '/profile':
            filepath = './profile.html';
            break;
        default:
            filepath = './404.html';
    }
    fs.readFile(filepath, function (err, data) {
        if (err) {
            console.log('error', err);
            res.writeHead(501, { 'content-type': 'text/html' });
            res.end('<h1>error!<h1>');
        } else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(data);
        }
        return;

    })

}

const server = http.createServer(requestHandler);

server.listen(port, function (err) {
    if (err) {
        cons.log(err);
        return
    }
    console.log('server is running on port :', port);
})
