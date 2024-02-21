// server.js

const express = require('express');
const mysql = require('mysql');
const dbQueries = require('./dbQueries'); // Importa las consultas a la base de datos

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'astar',
  database: 'precio'
});

// Conectar a la base de datos MySQL
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Definir las rutas de tu API
app.get('/api/productos', (req, res) => {
  dbQueries.obtenerProductos((err, productos) => {
    if (err) {
      res.status(500).send('Error al obtener productos');
      return;
    }
    res.json(productos);
  });
});

// Escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
