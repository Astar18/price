// server.js 

const express = require('express');
const app = express();

// importar la conexión 
const db = require('./db');

app.get('/productos', (req, res) => {
  
  // usar la conexión
  db.query('SELECT * FROM productos WHERE codigo_barras = ?', [barcode], (error, results) => {
    
    if(error) throw error;

    if(results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).send('Producto no encontrado'); 
    }

  });


});

app.listen(3000);
