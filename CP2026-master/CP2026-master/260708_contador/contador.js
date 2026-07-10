// Declaración de variables
const contador = document.querySelector('#contador')  //esto es un h2, que tiene un cero (ahora)
const mensaje = document.getElementById('mensaje')

const btnEntrada = document.getElementById('btn-entrada')
const btnSalida = document.getElementById('btn-salida')
const btnReset = document.getElementById('btn-reset')

const MAX = 10
const MIN = 0 //LUEGO VEMOS ESTO

//Estado
let personas = 0

//listeners
btnEntrada.addEventListener('click', incremento)
btnSalida.addEventListener('click', decremento)
btnReset.addEventListener('click', reset)

function incremento() {
    if (personas < MAX) {
        personas++
        contador.innerHTML = personas
        if (personas >= 7 && personas < MAX) {
            mensaje.innerHTML = 'Casi lleno'
            mensaje.classList.add('naranja')
            contador.style.color = 'orange'

        }
        if (personas === MAX) {
            mensaje.innerHTML = "Completo"
            // mensaje.style.color = 'red'
            mensaje.classList.remove('naranja')
            mensaje.classList.add('rojo')
            contador.style.color = 'red'
        }

    }
}

function decremento() {
    if (personas > MIN) {
        personas--
        contador.innerHTML = personas
        if (personas >= 7 && personas < MAX) {
            mensaje.innerHTML = 'Casi lleno'
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
    personas = 0
    contador.innerHTML = personas
    contador.style.color = 'black'
    mensaje.innerHTML = ''

}



