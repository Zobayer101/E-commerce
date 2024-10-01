const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
    password: "",
  database:"mydb",
});



module.exports = db;
