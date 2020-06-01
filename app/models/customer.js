const mongoose = require('mongoose')
// const mongoose_delete = require('mongoose-delete')

const isEmail = require('validator/lib/isEmail')
const isNumeric = require('validator/lib/isNumeric')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    name: {
        type: String,
        required: [true, 'customer name is required'] 
    }, 
    email: {
        type: String,
        validate: {
            validator: function(value){
                if(!value) {
                    return true 
                } 
                return isEmail(value)
            },
            message: 'invalid email format'
        }
    },
    mobile: {
        type: String,
        minlength: [10,'mobile number must be 10 characters long'],
        maxlength: [10, 'mobile number must be 10 characters long'],
        validate: {
            validator: function(value){
                return isNumeric(value)
            },
            message: 'mobile should be only numbers'
        }
    },
    company: {
        type: String 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

// customerSchema.plugin(mongoose_delete)

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer