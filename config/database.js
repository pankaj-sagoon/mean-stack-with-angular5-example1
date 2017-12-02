// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
    db: 'mean-angular-5',
    uri: 'mongodb://localhost:27017/mean-angular-5',
    secret: crypto
}