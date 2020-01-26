let fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
let chunks = 0;

readStream.on('data', (data)=>{
    console.log(data);
    chunks++;
    console.log(chunks);
});
