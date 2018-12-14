const jwt = require('jsonwebtoken')
const token = {
    generate:({ email },expiresIn) =>{
        return jwt.sign({ email }, process.env.SECRET_KEY, {expiresIn });
    }
};

module.exports = token ;