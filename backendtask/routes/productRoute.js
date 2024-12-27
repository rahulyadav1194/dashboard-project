const express = require('express')

const router =express.Router()
 
let uploads = require('../multerConfig.js') 

let productController = require('../controller/productController.js')

router.post('/saveProduct',uploads.single('image'), productController.saveProduct)

router.get('/getProduct',productController.getProduct)

router.delete('/deleteProduct/:id',productController.deleteProduct)

router.get('/getProductById/:id',productController.getProductById)

router.put('/updateProduct/:id',productController.updateProduct) 

router.post('/addCategory',productController.addCategory)

router.get('/getCategory',productController.getCategory) 


module.exports = router