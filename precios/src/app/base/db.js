// db.js

const mysql = require('mysql');

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
module.exports = db;

// Importar el módulo para manejar consultas a la base de datos
const dbQueries = require('./dbQueries');

// Configurar las rutas de tu API
app.get('/api/productos', (req, res) => {
  // Usar la función obtenerProductos del módulo dbQueries para obtener los productos desde la base de datos
  dbQueries.obtenerProductos((err, productos) => {
    if (err) {
      // Si hay un error, enviar una respuesta de error
      res.status(500).send('Error al obtener productos');
    } else {
      // Si no hay errores, enviar los productos como respuesta en formato JSON
      res.json(productos);
    }
  });
});