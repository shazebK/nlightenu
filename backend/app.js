const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const session = require('express-session');
const MongodbStore = require('connect-mongodb-session')(session);
require('dotenv').config();

const { mongoConnect } = require('./utils/database');

const articlesRoutes = require('./routes/articles');

const userRoutes = require('./routes/users');

const authRoutes = require('./routes/auth');


const app = express();

//This functions here tells where to store the incoming files and by what name.
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().getTime().toString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

const store = new MongodbStore({
    uri: process.env.MONGO_URI,
    collection: 'sessions',
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));

app.use('/images', express.static(path.join(__dirname, 'images')));

//Later you may have to fix this
app.use(
    session({
        secret: 'my hero academia', 
        resave: false, 
        saveUninitialized: false, 
        store: store, 
        cookie:{
            secure:false,
            maxAge:1000 * 60 * 60 * 24,
        }
    })
);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



app.use('/articles', articlesRoutes);

app.use('/users', userRoutes);

app.use('/auth', authRoutes);

mongoConnect(() => {
    app.listen(8080, () => console.log("backend Running"));
})