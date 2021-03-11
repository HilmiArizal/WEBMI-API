const jwt = require('jsonwebtoken');

module.exports = {
    auth: (req, res, next) => {
        if(req.method !== 'OPTIONS'){
            jwt.verify(req.token, 'keyWebmi', (err, decoded) => {
                if(err){
                    return res.status(401).json({
                        message: 'User Not Authorized'
                    })
                }
                req.user = decoded;
                next();
            })
        }else{
            next(0)
        }
    }
}