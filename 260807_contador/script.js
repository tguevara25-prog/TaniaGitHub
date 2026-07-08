// Declaración de variables

const contador = document.querySelector('#contador') //selector
const mensaje = document.getElementById('mensaje') //ID (lo mismo pero diferente manera)

//const porque es un h2 que tiene un cero y no cambia
//contenedor const / contenido let

const btnEntrada = document.getElementById('btn-entrada')
const btnSalida = document.getElementById('btn-salida')
const btnReset = document.getElementById('btn-reset')

const MAX = 10
const MIN = 0

//Estado

let personas = 0

//Listeners

btnEntrada.addEventListener('click', incremento)
btnSalida.addEventListener('click', decrecimiento)
btnReset.addEventListener('click', reset)

function incremento() {
  if (personas < MAX){
    personas++
    contador.innerHTML = personas
    if (personas >= 7 && personas <=MAX){
      mensaje.innerHTML = 'Casi lleno'
      mensaje.classList.add ('naranja')
      contador.style.color = "orange"
    }
    if (personas === MAX){
      mensaje.classList.remove('naranja')
      mensaje.classList.add('rojo')
      mensaje.innerHTML = "No cabes vas pa' atrás"
      contador.style.color = 'red'
    }
  }
}

function decrecimiento() {
  if (personas > MIN){
    personas--
    contador.innerHTML = personas
    if (personas >= 7 && personas < MAX){
      mensaje.innerHTML = "Chau no hay nadie"
      mensaje.classList.add('naranja')
      contador.style.color = 'orange'
    } else {
     mensaje.classList.remove('naranja')
     mensaje.innerHTML = ''
     contador.style.color = 'black'
   }
  }
}

function reset(){
  personas = '0'
  contador.innerHTML = personas
  contador.style.color = 'black'
  mensaje.innerHTML = ''
}