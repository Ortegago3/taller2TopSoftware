// Array de Pokeneas (Ejemplo con datos quemados)
const pokeneas = [
  {
    id: 1,
    nombre: 'Arcanine',
    altura: '2.5 m',
    habilidad: 'Ataques de rap',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/Arcanine.jpg',
    fraseFilosofica: 'La vida es un visaje.'
  },

  {
    id: 2,
    nombre: 'Charizard',
    altura: '2.0 m',
    habilidad: 'Bolas de rimas ardientes',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/Charizard.jpg',
    fraseFilosofica: 'Pongalas que se las coloreo.'
  },

  {
    id: 3,
    nombre: 'Charmander',
    altura: '1.2 m',
    habilidad: 'Rimas en llamas infernales',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/Charmander.jpg',
    fraseFilosofica: 'Como el aguacero que refresca la tarde, a veces las lágrimas limpian el alma.',
  },

  {
    id: 4,
    nombre: 'Kadabra',
    altura: '1.9 m',
    habilidad: 'Telequinesis de rap',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/Kadabra.jpg',
    fraseFilosofica: 'La vida es como un sancocho, entre más ingredientes le metas, más sabroso.',
  },

  {
    id: 5,
    nombre: 'Machop',
    altura: '0.8 m',
    habilidad: 'Golpes del centro',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/Machop.jpg',
    fraseFilosofica: 'La felicidad no está en el destino, sino en el flow del camino.',
  },

  {
    id: 6,
    nombre: 'Mewtwo',
    altura: '1.92 m',
    habilidad: 'Manipulacion y extorsion',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/MewTwo.jpg',
    fraseFilosofica: 'La vida se trata de dolores pero el resto es de sabores.',
  },
 
  
  {
    id: 7,
    nombre: 'PikaPika',
    altura: '0.6 m',
    habilidad: 'Rimas electrizantes',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/Pikachu.jpg',
    fraseFilosofica: 'pika pika.',
  },

  {
    id: 8,
    nombre: 'Slowbro',
    altura: '2.2 m',
    habilidad: 'Golpes especiales',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/Slowbro.jpg',
    fraseFilosofica: 'Como llegue la vida la vivo.',
  },

  {
    id: 9,
    nombre: 'Wartortle',
    altura: '1.0 m',
    habilidad: 'inundacion',
    imagen: 'https://storage.googleapis.com/pokeneas_taller/Wartortle.jpg',
    fraseFilosofica: 'Vamos a calmarnos.',
  },
  // Agrega más Pokeneas aquí

];

// Función para obtener un Pokenea aleatorio
const getPokeneaAleatorio = () => {
  const indiceAleatorio = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[indiceAleatorio];
};


  getPokeneaDatos= () => {
    const pokenea = getPokeneaAleatorio();
    return {
      id: pokenea.id,
      nombre: pokenea.nombre,
      altura: pokenea.altura,
      habilidad: pokenea.habilidad
    };
  },
  getPokeneaFraseImagen=() => {
    const pokenea = getPokeneaAleatorio();
    return {
      imagen: pokenea.imagen,
      fraseFilosofica: pokenea.fraseFilosofica
    };
  };

  module.exports = {getPokeneaDatos, getPokeneaFraseImagen};
