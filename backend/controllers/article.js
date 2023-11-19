const mongodb = require('mongodb');

const Product = require('../models/article');

exports.getArticle = async(req,res,next) => {
    const articleId = req.params.articleId;
    try{
        const article = await Product.findOne({_id:new mongodb.ObjectId(articleId)});
        res.json(article);
    }
    catch(error){
        console.log(error);
    }
}

exports.postArticle = async(req,res,next) => {
    let errors = {};
    if(!req.file){
        // return res.status(422).send("Select the valid file type");
        errors.image = "Select valid image";
    }

    if(req.body.title.length===0 || req.body.title.length > 40){
        errors.title = "Select appropriate length for title";
    }

    if(req.body.content.length === 0){
        errors.content = "Enter some content";
    }

    if(Object.keys(errors).length > 0){
        return res.status(422).send(errors);
    }

    const article = {
        title:req.body.title,
        content:req.body.content,
        author:req.body.author,
        imageUrl:"http://localhost:8080/" + req.file.path,
    }

    const product = new Product(article);
    try{
        const response = await product.save();
        return res.status(200).send("Successfully saved");
    }
    catch(error){
        console.log(error);
    }  
}

exports.getAllArticles = async(req,res,next) => {
    try{
        const response = await Product.fetchAll();
        return res.send(response);
    }
    catch(error){
        console.log(error);
        return res.status(500).send("Could not fetch articles");
    }
}