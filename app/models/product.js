const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    price: {
        type: Number, 
        required: [true, 'price is required'],
        min: [1, 'price should be greater or equal to 1']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

module.exports = Product