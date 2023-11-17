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
    console.log(req.body);
    if(!req.file){
        return res.status(500).send("Select the valid file type");
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