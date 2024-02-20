// dbQueries.js

const db = require('./db');

function obtenerProductos(callback) {
  db.query('SELECT * FROM productos', (err, productos) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, productos);
  });
}

// Agrega más funciones para insertar, actualizar o eliminar productos según sea necesario

module.exports = {
  obtenerProductos
};