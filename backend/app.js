const express = require('express');
const bodyParser = require('body-parser');

const articlesRoutes = require('./routes/articles');

const userRoutes = require('./routes/users');


const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/articles',articlesRoutes);

app.use('/users',userRoutes);

app.listen(8080,() => console.log("backend running"));