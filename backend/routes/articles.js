const express = require('express');

const articleController = require('../controllers/article');

const router = express.Router();

router.get('/',articleController.getAllArticles);

router.get('/:articleId',articleController.getArticle);

router.post('/',articleController.postArticle);


module.exports = router;

