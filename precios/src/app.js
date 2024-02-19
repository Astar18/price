// Importar los módulos necesarios
const express = require('express');
const mysql = require('mysql');

// Crear una instancia de Express
const app = express();

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',         // Cambia esto por la dirección de tu servidor MySQL
  user: 'root',  // Cambia esto por el usuario de tu base de datos MySQL
  password: 'astar',  // Cambia esto por la contraseña de tu base de datos MySQL
  database: 'precio'         // Cambia esto por el nombre de tu base de datos MySQL
});

// Conectar a la base de datos MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Configurar las rutas de tu API
// Aquí puedes definir todas las rutas de tu API utilizando app.get(), app.post(), etc.

// Escuchar en el puerto especificado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});