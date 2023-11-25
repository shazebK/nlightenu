const express = require('express');

const articleController = require('../controllers/article');

const isAuth = require('../middlewares/is_auth');

const router = express.Router();

router.get('/',articleController.getAllArticles);

router.get('/:articleId',articleController.getArticle);

router.post('/',isAuth,articleController.postArticle);


module.exports = router;

