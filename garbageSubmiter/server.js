const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const {Client} = require('pg');

const app = express();
const mustache = mustacheExpress();

mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine','mustache');
app.use(bodyParser.urlencoded({extended:false}));

app.listen(5050);

app.get('/adder', (req,res)=> {
    res.render('adder');
});

app.post('/garbage/add', (req,res)=> {
    console.log(req.body);
});

