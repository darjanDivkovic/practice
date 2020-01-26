let http = require('http');
let fs = require('fs');

let server = http.createServer(
    (req,res) => {

        if(req.url === '/home' || req.url === '/'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Boys visited the homepage!');
        }
        else if(req.url === '/profile'){
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Boys visiting the profile page!');
        }
        else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            fs.createReadStream(__dirname + '/404.html').pipe(res);
        }

    }
);

server.listen(8000);