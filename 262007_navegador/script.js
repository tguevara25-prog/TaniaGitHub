let saludo = document.getElementById('saludo')
let btnNombre = document.getElementById('btnNombre')

let tamañoVentana = document.getElementById('tamañoVentana')

let idiomaNavegador = document.getElementById('idiomaNavegador')
idiomaNavegador.textContent = navigator.language

let estadoConexion = document.getElementById('estadoConexion')

let paginaActual = document.getElementById('paginaActual')
paginaActual.textContent = location.pathname

let btnTitulo = document.getElementById('btnTitulo')
let btnModo = document.getElementById('btnModo')

let campoMensaje = document.getElementById('campoMensaje')
let btnAñadir = document.getElementById('btnAñadir')
let contadorMensajes = document.getElementById('contadorMensajes')
let listaMensajes = document.querySelector('.listaMensajes')

let mensajes = []

let notificacion = document.getElementById('notificaciones')

//Listeners

btnNombre.addEventListener('click', identificarUsuario)
window.addEventListener('resize', actualizarTamaño)
window.addEventListener('online', actualizarConexion)
window.addEventListener('offline', actualizarConexion)
btnTitulo.addEventListener('click', cambiarTitulo)
btnModo.addEventListener('click', cambiarModo)
btnAñadir.addEventListener('click', añadirMensaje)
campoMensaje.addEventListener('keydown', comprobarTecla)

// Funciones

function identificarUsuario(){
  // alert ('hola')
  let nombre = prompt('¿Cómo te llamas?')
  if(nombre === null || nombre === ''){
    saludo.textContent = 'Hola, visitante'
    mostrarNotificaciones('Usuario no identificado')
  } else {
    saludo.textContent = `Hola, ${nombre}`
    mostrarNotificaciones('Usuario identificado')
  }
}

function actualizarTamaño(){
  tamañoVentana.textContent = window.innerWidth + ' x ' + window.innerHeight
}

function actualizarConexion(){
  if(navigator.onLine === true){
    estadoConexion.textContent = 'En línea'
  } else {
    estadoConexion.textContent = 'Sin conexión'
  }
}

function cambiarTitulo(){
  let nuevoTitulo = prompt('Escribe un título para la pestaña')
  if(nuevoTitulo !== null && nuevoTitulo !== ''){
    document.title = nuevoTitulo
  }
}

function cambiarModo(){
  document.body.classList.toggle('modoNocturno')
  if(document.body.classList.contains('modoNocturno')){
    btnModo.textContent = 'Modo claro'
  } else{
    btnModo.textContent = 'Modo oscuro'
  }
}

function mostrarMensajes(){
  listaMensajes.innerHTML = ''

  for(let i = 0; i < mensajes.length; i++){
    let mensaje = mensajes [i]
    listaMensajes.innerHTML +=`
    <article class='mensaje'>
    <p>${mensaje}</p>
    <button class='btnEliminar' data-indice='${i}'>Eliminar</button>
    </article>
    `
  }

  let botonesEliminar = document.querySelectorAll('.btnEliminar')

  for(let boton of botonesEliminar){
    boton.addEventListener('click', eliminarMensaje)
  }
  if(mensajes.length === 1){
    contadorMensajes.textContent = '1 mensaje'
  } else{
    contadorMensajes.textContent = mensajes.length + ' mensajes'
  }
}


function añadirMensaje(){
  let texto = campoMensaje.value
  if(texto === ""){
    alert('¡Escribe algo en el input!')
  } else{
    mensajes.push(texto)
    campoMensaje.value = ''
  }
  mostrarMensajes()
  mostrarNotificaciones('Mensaje añadido')
}

function comprobarTecla(e){
  if(e.key === "Enter"){
    añadirMensaje()
  }
}

function eliminarMensaje(e){
  let indice = e.target.dataset.indice

  let confirmar = confirm('¿Estás seguro?')
  if(confirmar === true){
    mensajes.splice(indice, 1)
    mostrarMensajes()
  }
  mostrarNotificaciones('Mensaje eliminado')
}

function mostrarNotificaciones(texto){
  notificacion.textContent = texto

  notificacion.classList.add('visible')

  setTimeout(ocultarNotificacion, 2000)
}

function ocultarNotificacion(){
  notificacion.classList.remove('visible')
}

// Llamadas

actualizarTamaño()
actualizarConexion()
mostrarMensajes()