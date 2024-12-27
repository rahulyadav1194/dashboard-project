const express = require('express')

const router = express.Router()

const customerController = require('../controller/customerController.js')

router.post('/saveCustomer',customerController.saveCustomer) 

router.get('/getCustomer',customerController.getCustomer)

router.delete('/deleteCustomer/:id',customerController.deleteCustomer)

router.get('/getCustomerById/:id',customerController.getCustomerById) 

router.put('/updateCustomer/:id',customerController.updateCustomer)

module.exports = router