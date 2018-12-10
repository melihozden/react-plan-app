const jwt = require('jsonwebtoken')
const token = {
    generate:({ email },expiresIn) =>{
        return jwt.sign({ email }, 'secret', { expiresIn: '1h' });
    }
};

module.exports = token ;