let express = require('express');

let app = express();

app.get('/', (req,res)=> {
    res.send('Boys are on the homepage! yaiks');
});


app.get('/home', (req,res)=> {
    res.send('Boys are still on the homepage! yaiks');
});


app.get('/profile', (req,res)=> {
    res.send('Boys checking the profile page');
});

app.listen(3000);