const mongodb = require('mongodb');

const { getDB } = require('../utils/database');

const date  = require('../utils/current_date');

module.exports = class Article{
    constructor(article){
        this.author = article.author;
        this.title = article.title;
        this.content = article.content;
        this.imageUrl = article.imageUrl;
        this.date = date();
    }

    save(){
        const db = getDB();
        return db.collection('articles').insertOne(this);
    }

    static fetchAll(){
        const db = getDB();
        return db.collection('articles').find().toArray();
    }

    static async findById(id){
        const db = getDB();
        return db.collection('articles').find({_id:new mongodb.ObjectId(id)}).next();
    }
}