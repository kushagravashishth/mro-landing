var mysql = require('mysql');

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "kusha",
    password: "kushagra25"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});