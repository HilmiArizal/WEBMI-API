var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user:'hilmi',
    password:'HilmiArizal41',
    database:'webmi',
    multipleStatements: true
})

module.exports = {connection};