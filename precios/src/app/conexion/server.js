const express = require('express');
const mysql = require('mysql');

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
    process.exit(1); // Detener la ejecución del servidor si hay un error
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Definir las rutas de tu API
// Endpoint para obtener todos los productos
app.get('/api/productos', (req, res) => {
  db.query('SELECT * FROM productos', (error, results) => {
    if (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({ error: 'Error al obtener productos' }); // Enviar mensaje de error en la respuesta JSON
    } else {
      res.json(results);
    }
  });
});

// Escuchar en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});