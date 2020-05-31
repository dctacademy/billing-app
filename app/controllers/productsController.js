const Product = require('../models/product')
const productsController = {}

productsController.list = (req, res) => {
    Product.find({ user: req.user._id })
        .then((products) => {
            res.json(products)
        })
        .catch((err) => {
            res.json(err)
        })
}

productsController.show = (req, res) => {
    const id = req.params.id
    Product.findOne({ _id: id, user: req.user._id })
        .then((product) => {
            if (product) {
                res.json(product)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

productsController.create = (req, res) => {
    console.log(req.msg)
    const body = req.body
    const product = new Product(body)
    product.user = req.user._id
    product.save()
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.json(err)
        })
}

productsController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Product.findOneAndUpdate({ _id: id, user: req.user._id }, body, { new: true, runValidators: true })
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.json(err)
        })
}

productsController.destory = (req, res) => {
    const id = req.params.id
    Product.findOneAndDelete({ _id: id, user: req.user._id })
        .then((product) => {
            res.json(product)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = productsController