const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const bcrypt = require('bcrypt-nodejs');



// Email
let emailLenthChecker = (email) => {
    if(!email){
        return false
    }else{
        if(email.length < 5 || email.length > 30){
            return false;
        }else{
            return true;
        }
    }
}
let validEmailChecker = (email) => {
    if(!email){
        return false;
    }else{
         const regExp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);
         return regExp.test(email);
    }
}

const emailValidators= [{
    validator: emailLenthChecker,
    message: 'Email must be at least 5 characters but no more than 30'
},{
    validator: validEmailChecker,
    message: 'Must be valid e-mail'
}];

// Username
let usernameLengthChecker = (username) => {
    if(!username){
        return false
    }else{
        if(username.length < 5 || username.length > 30){
            return false;
        }else{
            return true;
        }
    }
}
let validUserNameChecker = (username) => {
    if(!username){
        return false;
    }else{
        const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        return regExp.test(username);
    }
}
const usernameValidators=[{
    validator: usernameLengthChecker,
    message: 'Email must be at least 5 characters but no more than 30'
},{
    validator: validUserNameChecker,
    message: 'Username must not have special characters'
}]

// Password
let passwordLengthChecker = (password) => {
    if(!password){
        return false
    }else{
        if(password.length < 6 || password.length > 30){
            return false;
        }else{
            return true;
        }
    }
}
let validPasswordChecker = (password) => {
    if(!password){
        return false;
    }else{
        const regExp = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,30}$/);
        return regExp.test(password);
    }
}

const passwordValidators=[{
    validator: passwordLengthChecker,
    message: 'Password must be at least 6 characters but no more than 30'
},{
    validator: validPasswordChecker,
    message: 'Password must have at least a number, and at least a special character'
}];
const userSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true, validate: emailValidators},
    username: {type: String, required: true, unique: true, lowercase: true, validate: usernameValidators},
    password: {type: String, required: true, validate: passwordValidators}
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password'))
        return next();

    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
    });
})

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
module.exports = mongoose.model('User', userSchema);