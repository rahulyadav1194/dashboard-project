const db =  require('../dataBaseConfig.js')

exports.saveCustomer=(req , res)=>{
    let full_name = req.body.full_name
    let email = req.body.email
    let number = req.body.number
    let address = req.body.address
    let payment_dues = req.body.payment_dues

    let value = [[full_name,email, number, address, payment_dues]]
     let sql = " insert into customer (full_name, email, number, address, payment_dues )  values ?"
     db.query(sql , [value], (err ,result)=>{
        if(err) throw err
        else{
            res.send('customer data  saved')
        }
     })
}

exports.getCustomer=(req,res)=>{  
    let sql = 'select * from customer'
    db.query(sql , (err, result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })  
}

exports.deleteCustomer= (req , res)=>{
    let id = req.params.id
    let sql = 'delete from customer where id = ?'
    db.query(sql,[id], (err,result)=>{
        if(err) throw err
        else{
            res.send('customer data delete')
        }
    })
}

exports.getCustomerById= (req, res)=>{
    let id = req.params.id
    let sql = 'select * from customer where id = ? '
    db.query(sql, [id], (err , result)=>{
        if(err) throw err
        else(
            res.json(result) 
        )
    })
}

exports.updateCustomer = (req , res) =>{
    let id = req.params.id
    let newData =req.body
    let sql = 'update  customer set ? where id = ?'
    db.query(sql , [newData ,id], (err , result)=>{
        if(err) throw err
        else{
            res.send('data update')
        } 
    })
}

