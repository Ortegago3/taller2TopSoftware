// pokeneaController.js
const pokeneas = require('./pokeneaModel');

const getPokeneaAleatorio = () => {
  const indiceAleatorio = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[indiceAleatorio];
};

const getPokeneaDatos = () => {
  const pokenea = getPokeneaAleatorio();
  return {
    id: pokenea.id,
    nombre: pokenea.nombre,
    altura: pokenea.altura,
    habilidad: pokenea.habilidad
  };
};

const getPokeneaFraseImagen = () => {
  const pokenea = getPokeneaAleatorio();
  return {
    imagen: pokenea.imagen,
    fraseFilosofica: pokenea.fraseFilosofica
  };
};

module.exports = { getPokeneaDatos, getPokeneaFraseImagen };
