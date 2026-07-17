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

function mostrarPlanes(){
  listaPlanes.innerHTML = ''
  for(let i = 0; i < planes.length; i++){
  // for(let plan of planes){
    let plan = planes[i]
    let mensajeEstado
    let claseEstado
  
    if(plan.reservado === true){
      mensajeEstado = 'Ya está reservado'
      claseEstado = 'reservado'
    } else {
      mensajeEstado = 'Plan disponible'
      claseEstado = 'disponible'
    }

    //poner 'gratis' cuando el precio es cero
    let textoPrecio
    if(plan.precio === 0){
      textoPrecio = 'Gratis'
    } else {
      textoPrecio = `${plan.precio} €`
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
    <p>Precio: ${textoPrecio}</p>
    <p class='estado ${claseEstado}'>${mensajeEstado}</p>
    <button class='btnReservar' data-indice='${i}'>Cambiar reserva</button>
    </div>
    </article>
    `
  }

  let botonesReservar = document.querySelectorAll('.btnReservar')
  
  for(let boton of botonesReservar){
    boton.addEventListener('click', cambiarReserva)
    }
  }

function cambiarReserva(ev) {
  let indice = ev.target.dataset.indice
  // console.log(indice)
  planes[indice].reservado = !planes[indice].reservado

  mostrarPlanes()
}

planes.push({
    nombre: 'Beer Pong',
    lugar: 'Playa',
    precio: 'Lo que te valga la cerveza',
    categoria: 'Deporte',
    icono: '🍺',
    imagen: 'img/beer-pong.jpg',
    reservado: false
  }
)

mostrarPlanes()