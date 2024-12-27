const express = require('express')

const db = require('./dataBaseConfig.js')
const cors = require("cors")

const customerRouter = require('./routes/customerRoute')
const productRouter = require('./routes/productRoute')


let app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))

db.connect((err)=>{
    if(err) throw err
    else{
        console.log('database connected') 
    }
})

let customerTableQuery = `
CREATE TABLE  if not exists customer (
  id INT NOT NULL AUTO_INCREMENT,
  full_name VARCHAR(255) NULL,
  email VARCHAR(255) NULL,
  number VARCHAR(255) NULL,
  payment_dues VARCHAR(255) NULL,
  address VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(customerTableQuery , (err,result)=>{
    if(err) throw err
    else{
        console.log("customer table create")
    }
})

let productTableQuery = `
CREATE TABLE  if not exists product (
  id INT NOT NULL AUTO_INCREMENT,
  brand VARCHAR(255) NULL,
  price VARCHAR(255) NULL,
  category VARCHAR(255) NULL,
  rating VARCHAR(255) NULL,
  image VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(productTableQuery, (err, result)=>{
    if(err) throw err
    else{
        console.log("product table  create")
    }
})

let productCategoryTableQuery = `
CREATE TABLE  if not exists productCategory (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(255) NULL,
  category_discription VARCHAR(255) NULL,
  PRIMARY KEY (id));
`
db.query(productCategoryTableQuery,(err, result)=>{
    if(err) throw err
    else{
        console.log('productcategory table create')
    }
})

app.use('/api', customerRouter)

app.use('/api', productRouter)


app.listen(700,()=>{
    console.log('server is run port 700')
})