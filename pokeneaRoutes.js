// pokeneaRoutes.js
const express = require('express');
const os = require("os");
const { getPokeneaDatos, getPokeneaFraseImagen } = require('./pokeneaController');
const router = express.Router();

router.get('/datos', (req, res) => {
  const datosPokenea = getPokeneaDatos();
  datosPokenea.idContenedor = os.hostname();
  res.json(datosPokenea);
});

router.get('/frase-imagen', (req, res) => {
  const { imagen, fraseFilosofica } = getPokeneaFraseImagen();
  res.send(`
    <p><img src="${imagen}" alt="Imagen de Pokenea"></p>
    <p>${fraseFilosofica}</p>
    <p>ID del contenedor: ${os.hostname()}</p>
  `);
});

module.exports = router;
