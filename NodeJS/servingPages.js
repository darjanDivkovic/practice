let http = require('http');
let fs = require('fs');

let person = {
    name: 'Dacija',
    city: '2zla',
}

let server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(person));
});

server.listen(3000);