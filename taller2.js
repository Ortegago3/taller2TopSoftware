const express= require('express');
const os = require("os")
const pokeneaController=require('./pokeneaControlador');
const app=express();
const port=80;

app.get('/pokenea/datos', (req, res)=>{
    const datosPokenea=pokeneaController.getPokeneaDatos();
    datosPokenea.idContenedor='';
    res.json(datosPokenea);
});

app.get('/pokenea/frase-imagen', (req, res)=>{
    const { imagen, fraseFilosofica }=pokeneaController.getPokeneaFraseImagen();
    const html = `
    <p><img src="${imagen}" alt="Imagen de Pokenea"></p>
    <p>${fraseFilosofica}</p>
    <p>ID del contenedor: ${os.hostname()}</p>
  `;
  res.send(html);
});

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

