const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    let errors = {};

    return User.findOne({ username: username }).then(existingUser => {
        if (!existingUser) {
            errors.username = "User does not exist";
        }

        if (existingUser && existingUser.password !== password) {
            errors.password = "Incorrect password";
        }

        if (Object.keys(errors).length > 0) {
            return res.status(422).send(errors);
        }

        const token = jwt.sign({
            username: existingUser.username,
        }, 'secretCode', { expiresIn: '1h' });

        return res.status(200).json({ token: token, userId: existingUser._id});
    })
}

exports.signup = (req, res, next) => {
    const user = new User(
        {
            username: req.body.username,
            password: req.body.password,
        }
    );

    let errors = {};

    return User.findOne({ username: user.username }).then(existingUser => {
        if (existingUser || user.username.length === 0) {
            errors.username = "Username already taken";
        }

        if (user.password.length < 8) {
            errors.password = "Password should be atleast 8 characters";
        }

        if (user.password !== req.body.cPassword) {
            errors.cPassword = "Passwords does not match";
        }

        if (Object.keys(errors).length > 0) {
            return res.status(422).send(errors);
        }

        return user.save().then(result => {
            return res.json("User created Successfully");
        })
    }).catch(error => {
        return res.status(500).json(error);
    });
}

exports.logout = (req, res, next) => {
    
}