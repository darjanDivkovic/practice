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

app.get('/posts/:id', (req,res)=> {
    res.send('This is post : '+ req.params.id);
})

app.listen(3000);