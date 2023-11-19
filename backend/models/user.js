const { getDB } = require('../utils/database');

module.exports = class User{
    constructor(user){
        this.username = user.username;
        this.password = user.password;
    }   

    save(){
        const db = getDB();
        return db.collection('users').insertOne(this);
    }

    static findOne(query){
        const db = getDB();
        return db.collection('users').findOne(query);
    }
}