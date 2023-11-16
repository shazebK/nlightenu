const User = require('../models/user');

exports.getUser = (req,res,next) => {
    const userId = req.params.userId;
    const user = User.fetchUser(userId);
    res.send(user);
}

exports.postUser = (req,res,next) => {
    const user = new User(req.body);
    user.save();
}