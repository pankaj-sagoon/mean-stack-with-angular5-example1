const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const bcrypt = require('bcrypt-nodejs');



// Title
let titleLengthChecker = (title) => {
    if(!title){
        return false
    }else{
        if(title.length < 5 || title.length > 100){
            return false;
        }else{
            return true;
        }
    }
}
let validTitleChecker = (title) => {
    if(!title){
        return false;
    }else{
        const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        return regExp.test(title);
    }
}

const titleValidators= [{
    validator: titleLengthChecker,
    message: 'Title must be at least 5 characters but no more than 30'
},{
    validator: validTitleChecker,
    message: 'Must be valid title'
}];


// Body
let bodyLengthChecker = (body) => {
    if(!body){
        return false
    }else{
        if(body.length < 5 || body.length > 500){
            return false;
        }else{
            return true;
        }
    }
};

const bodyValidators= [{
    validator: bodyLengthChecker,
    message: 'Title must be at least 5 characters but no more than 500'
}];

//Comment
let commentLengthChecker = (comments) => {
    if(!comments[0]){
        return false
    }else{
        if(comments[0].length < 5 || comments[0].length > 200){
            return false;
        }else{
            return true;
        }
    }
};

const commentValidators= [{
    validator: commentLengthChecker,
    message: 'Comment must not exceed 200 characters'
}];



const userSchema = new Schema({
    title: {type: String, required: true, validate: titleValidators},
    body: {type: String, required: true, validate: bodyValidators},
    createdBy: {type: String},
    createdAt: {type: Date, default: Date.now()},
    likes: {type: Number},
    likedBy: {type: String},
    dislikes: {type: Number},
    dislikedBy: {type: Number},
    comments: [{
        comment:{type: String, validate: commentValidators},
        commentator:{type: String}
    }]
});

module.exports = mongoose.model('Blogs', userSchema);