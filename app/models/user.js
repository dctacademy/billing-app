const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const isEmail = require('validator/lib/isEmail')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String, 
        required: [true, 'username is required'], 
        minlength: [4, 'username must be minimum 4 characters long'],
        maxlength: [64, 'username should not be more than 64 characters long'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true, 
        validate: {
            validator: function(value){
                return isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
    }, 
    password: {
        type: String, 
        required: [true, 'password is required'],
        minlength: [8, 'password must be minimum 8 characters long'],
        maxlength: [128, 'password should not be more than 128 characters long']
    },
    businessName: {
        type: String,
        required: [true, 'business name is required']
    },
    address: {
        type: String,
        required: [true, 'business address is required']
    }
}, { timestamps: true })


userSchema.pre('save', function(next){
    const user = this
    bcryptjs.genSalt()
        .then((salt) => {
            bcryptjs.hash(user.password, salt)
                .then((encrypted) => {
                    user.password = encrypted
                    next()
                })
        })  
})

const User = mongoose.model('User', userSchema)

module.exports = User