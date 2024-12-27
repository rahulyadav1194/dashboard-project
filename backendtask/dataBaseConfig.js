const mysql = require('mysql')

let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'11694',
    database:'cp_pair'
})

module.exports =connection