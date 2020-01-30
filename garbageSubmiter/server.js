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

    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'smece',
        password: 'darjan1234',
        port: 5432
    });

    client.connect()
        .then(()=> {
            const query = 'INSERT INTO smece(smece) VALUES($1)';
            const value = [req.body.smece];
            client.query(query,value);
            console.log('New entry added to smece!');
        })
});

