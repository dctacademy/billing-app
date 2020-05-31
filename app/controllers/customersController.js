const Customer = require('../models/customer')
const customersController = {}

customersController.list = (req, res) => {
    Customer.find({ user: req.user._id })
        .then((customers) => {
            res.json(customers)
        })
        .catch((err) => {
            res.json(err)
        })
}

customersController.show = (req, res) => {
    const id = req.params.id
    Customer.findOne({ _id: id, user: req.user._id })
        .then((customer) => {
            if (customer) {
                res.json(customer)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

customersController.create = (req, res) => {
    console.log(req.msg)
    const body = req.body
    const customer = new Customer(body)
    customer.user = req.user._id
    customer.save()
        .then((customer) => {
            res.json(customer)
        })
        .catch((err) => {
            res.json(err)
        })
}

customersController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Customer.findOneAndUpdate({ _id: id, user: req.user._id }, body, { new: true, runValidators: true })
        .then((customer) => {
            res.json(customer)
        })
        .catch((err) => {
            res.json(err)
        })
}

customersController.destory = (req, res) => {
    const id = req.params.id
    Customer.findOneAndDelete({ _id: id, user: req.user._id })
        .then((customer) => {
            res.json(customer)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = customersController