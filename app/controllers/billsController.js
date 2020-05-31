const Bill = require('../models/bill')
const billsController = {}

billsController.list = (req, res) => {
    Bill.find({ user: req.user._id })
        .then((bills) => {
            res.json(bills)
        })
        .catch((err) => {
            res.json(err)
        })
}

billsController.show = (req, res) => {
    const id = req.params.id
    Bill.findOne({ _id: id, user: req.user._id })
        .then((bill) => {
            if (bill) {
                res.json(bill)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

billsController.create = (req, res) => {
    console.log(req.msg)
    const body = req.body
    const bill = new Bill(body)
    bill.user = req.user._id
    bill.save()
        .then((bill) => {
            res.json(bill)
        })
        .catch((err) => {
            res.json(err)
        })
}

billsController.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Bill.findOneAndUpdate({ _id: id, user: req.user._id }, body, { new: true, runValidators: true })
        .then((bill) => {
            res.json(bill)
        })
        .catch((err) => {
            res.json(err)
        })
}

billsController.destory = (req, res) => {
    const id = req.params.id
    Bill.findOneAndDelete({ _id: id, user: req.user._id })
        .then((bill) => {
            res.json(bill)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports = billsController