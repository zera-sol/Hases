const jwt = require('jsonwebtoken');
const studentModel = require('../models/student.model');

const SECRET_KEY = process.env.SECRET_KEY;

const authenticate = async (req, res, next) => {
   let token 
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, SECRET_KEY)
            req.student = await studentModel.findById(decoded.id).select("-password")
            next()
        }catch(error){
            res.status(401).json({message: "Not authorized, token failed"})
        }
    }
    if(!token){
        res.status(401).json({message: "Not authorized, no token"})
    }
}

module.exports = authenticate;