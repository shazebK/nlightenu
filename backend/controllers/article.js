const Product = require('../models/article');

exports.getArticle = async(req,res,next) => {
    const articleId = req.params.articleId;
    try{
        const article = await Product.findById(articleId);
        res.json(article);
    }
    catch(error){
        console.log(error);
    }
}

exports.postArticle = async(req,res,next) => {
    const product = new Product(req.body);
    try{
        const response = await product.save();
        res.status(200).send("Successfully saved");
    }
    catch(error){
        console.log(error);
    }  
}

exports.getAllArticles = async(req,res,next) => {
    try{
        const response = await Product.fetchAll();
        res.send(response);
    }
    catch(error){
        console.log(error);
    }
}