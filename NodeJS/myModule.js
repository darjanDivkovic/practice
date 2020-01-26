let fs = require('fs');

let readFile = ()=> {
    return fs.readFileSync('readMe.txt','utf-8');
};

module.exports.readFile = readFile;


