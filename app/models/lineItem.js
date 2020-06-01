const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lineItemSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true 
    },
    price: {
        type: Number
    },
    quantity: {
        type: Number,
        default: 1
    },
    subTotal: {
        type: Number
    }
})

module.exports = lineItemSchema