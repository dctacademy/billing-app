const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = require('./product')

const billSchema = new Schema({
    date: {
        type: Date, 
        default: Date.now 
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    total: {
        type: Number
    },
    lineItems: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            },
            price: {
                type: Number
            },
            subTotal: {
                type: Number
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ]
}, { timestamps: true })

billSchema.pre('save', function(next){
    const bill = this 
    let total = 0 
    const productIds = bill.lineItems.map(lineItem => lineItem.product) 
    Product.find().where('_id').in(productIds)
        .then((products) => {
            bill.lineItems.forEach(lineItem => {
                const price = products.find(product => String(product._id) == String(lineItem.product)).price 
                lineItem.price = price
                lineItem.subTotal = price * lineItem.quantity
                total += lineItem.subTotal
            })
            bill.total = total 
            next()
        })
})

const Bill = mongoose.model('Bill', billSchema)

module.exports = Bill