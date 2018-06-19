// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex');
module.exports = {
    //db: 'mean-angular-5',
    db: 'ng5meanex2',
    uri: 'mongodb://localhost:27017/mean-angular-5-example2',
    //uri: 'mongodb://root:123456@ds121015.mlab.com:21015/ng5meanex1',
    secret: crypto
}