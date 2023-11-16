const Product = require('../models/article');

exports.getArticle = (req,res,next) => {
    const articleId = req.params.articleId;
    const article = Product.findArticle(articleId);
    res.send(article);
}

exports.postArticle = async(req,res,next) => {
    const product = new Product(req.body);
    product.save();
    res.status(200).send("Successful");
}

exports.getAllArticles = (req,res,next) => {
    res.send(Product.fetchAll());
}