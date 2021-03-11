const jwt = require('jsonwebtoken');

module.exports = {
    createJWTToken: (payload) => {
        return jwt.sign(payload, 'keyWebmi', {expiresIn: '12h'})
    }
}