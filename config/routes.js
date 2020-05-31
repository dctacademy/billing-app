const express = require('express')
const router = express.Router() 
const { authenticateUser } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const customersController = require('../app/controllers/customersController')
const productsController = require('../app/controllers/productsController')
const billsController = require('../app/controllers/billsController')

router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users/account', authenticateUser, usersController.account)

router.get('/api/customers', authenticateUser, customersController.list)
router.post('/api/customers', authenticateUser, customersController.create)
router.get('/api/customers/:id', authenticateUser, customersController.show)
router.put('/api/customers/:id', authenticateUser, customersController.update)
router.delete('/api/customers/:id', authenticateUser, customersController.destory)

router.get('/api/products', authenticateUser, productsController.list)
router.post('/api/products', authenticateUser, productsController.create)
router.get('/api/products/:id', authenticateUser, productsController.show)
router.put('/api/products/:id', authenticateUser, productsController.update)
router.delete('/api/products/:id', authenticateUser, productsController.destory)

router.get('/api/bills', authenticateUser, billsController.list)
router.post('/api/bills', authenticateUser, billsController.create)
router.get('/api/bills/:id', authenticateUser, billsController.show)
// router.put('/bills/:id', authenticateUser, billsController.update)
router.delete('/api/bills/:id', authenticateUser, billsController.destory)

module.exports = router