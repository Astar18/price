const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'tu_contraseña', // Cambia 'tu_contraseña' por tu contraseña real
  database: 'precio',
  ssl: true
});

// Conectar a la base de datos MySQL
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos MySQL:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = db;