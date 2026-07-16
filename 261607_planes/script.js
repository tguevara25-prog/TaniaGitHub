let planes =  [
  { 
    nombre: 'Concierto al aire libre',
    lugar: 'Playa de Bogatell',
    precio: 10,
    categoria: 'Música',
    icono: '🪩',
    imagen: 'img/concert.jpg',
    reservado: false
  },
  { 
    nombre: 'Visita una expo',
    lugar: 'MACBA',
    precio: 0,
    categoria: 'Arte',
    icono: '🎨',
    imagen: 'img/museum.jpg',
    reservado: true
  },
  { 
    nombre: 'Rafting',
    lugar: 'Riu Vinalopó',
    precio: 22,
    categoria: 'Deporte',
    icono: '🛶',
    imagen: 'img/rafting.jpg',
    reservado: false
  },
  { 
    nombre: 'Drag Show',
    lugar: 'Strass',
    precio: 10,
    categoria: 'Drag',
    icono: '🌈',
    imagen: 'img/drag-show.jpg',
    reservado: false
  }
]


const listaPlanes = document.getElementById('listaPlanes')

for(let plan of planes){
  let mensajeEstado
  let claseEstado
  if(plan.reservado === true){
    mensajeEstado = 'Ya está reservado'
    claseEstado = 'reservado'
  } else {
    mensajeEstado = 'Plan disponible'
    claseEstado = 'disponible'
  }

  listaPlanes.innerHTML += `
  <article class='tarjeta'>
  <div class='contenedorImagen'>
  <img src=${plan.imagen} alt='${plan.nombre}'>
  
  <span class='icono'>${plan.icono}</span>
  </div>
  <div class='contenidoTarjeta'>
  <p class='categoria'>${plan.categoria}</p>
  <h2>${plan.nombre} ${plan.icono}</h2>
  <p>Lugar: ${plan.lugar}</p>
  <p>Precio: ${plan.precio}</p>
  <p>${mensajeEstado}</p>
  </div>
  </article>
  `
}