require('dotenv').config();

const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
    mongoClient.connect(
        process.env.MONGO_URI
    )
    .then((client)=> {
        console.log("database connected");
        _db = client.db();
        callback();
    }
    )
    .catch(err => {
        console.log(err);
        throw err;
    }
    )
}

const getDB = () => {
    if(_db){
        return _db;
    }

    throw "Database not found";
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

