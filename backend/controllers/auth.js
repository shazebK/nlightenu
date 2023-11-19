const User = require('../models/user');

exports.login = (req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;

    let errors = {};

    return User.findOne({username:username}).then(existingUser => {
        if(!existingUser){
            errors.username = "User does not exist";
        }

        if(existingUser && existingUser.password !== password){
            errors.password = "Incorrect password";
        }

        if(Object.keys(errors).length > 0){
            return res.status(422).send(errors);
        }
        else{
            //As we have already connected session with mongodb hence session gets automatically saved
            req.session.LoggedIn = true;
            req.session.user = existingUser;
            return res.send({sessionId:req.session.id});
        }
    })
}

exports.signup = (req,res,next) => {
    const user = new User(
        {
            username:req.body.username,
            password:req.body.password,
        }
    );

    let errors = {};

    return User.findOne({username:user.username}).then(existingUser => {
        if(existingUser || user.username.length === 0){
            errors.username = "Username already taken"; 
        }

        if(user.password.length < 8){
            errors.password = "Password should be atleast 8 characters";
        }

        if(user.password !== req.body.cPassword){
            errors.cPassword = "Passwords does not match";
        }

        if(Object.keys(errors).length > 0){
            return res.status(422).send(errors);
        }

        return user.save().then(result => {
            return res.send("User created Successfully");
        })
    }).catch(error => {
        return res.status(500).send(error);
    });
}

exports.logout = (req,res,next) => {
    req.session.destroy((error) => {
        console.log(error);
        res.send("Logout successful");
    })
}