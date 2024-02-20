// db.js

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'astar',  
  database: 'precio'
});

module.exports = db;
