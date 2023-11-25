const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    const authHeader = req.get('Authorization');

    if(!authHeader){
        return res.status(401).json("Not authenticated");
    }

    const token = authHeader.split(' ')[1];
    try{
        const decodedToken = jwt.verify(token,'secretCode');
        if(!decodedToken){
            return res.status(401).json("Not Authenticated");
        }

        req.userId = decodedToken.userId;
        next();
    }
    catch(err){
        return res.status(500).send("Could not authenticate");
    }
}