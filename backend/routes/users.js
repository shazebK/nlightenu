const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/:userId',userController.getUser);

router.post('/',userController.postUser);

module.exports = router;