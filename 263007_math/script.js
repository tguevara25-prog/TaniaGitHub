let numeroDecimal = document.getElementById('numeroDecimal')
const btnProbarRedondeo = document.getElementById('btnProbarRedondeo')
let resultadoRound = document.getElementById('resultadoRound')
let resultadoCeil = document.getElementById('resultadoCeil')
let resultadoFloor = document.getElementById('resultadoFloor')

let numeroAleatorio = document.getElementById('numeroAleatorio')
const btnGenerarDecimal = document.getElementById('btnGenerarDecimal')

let carasDado = document.getElementById('carasDado')
let caraDado = document.getElementById('caraDado')
const btnLanzarDado = document.getElementById('btnLanzarDado')
const mensajeDado = document.getElementById('mensajeDado')
let listaLanzamientos = document.getElementById('listaLanzamientos')

let primerLanzamiento = true


//Listeners

btnProbarRedondeo.addEventListener('click', ()=>{
  const numero = Number(numeroDecimal.value)

  resultadoRound.textContent = Math.round(numero)
  resultadoCeil.textContent = Math.ceil(numero)
  resultadoFloor.textContent = Math.floor(numero)
})

btnGenerarDecimal.addEventListener('click', ()=>{
  const numero = Math.random()
  numeroAleatorio.textContent = numero.toFixed(4)
})

btnLanzarDado.addEventListener('click', ()=>{
  const numeroCaras = Number(carasDado.value)
  caraDado.textContent = '? '
  mensajeDado.textContent = 'El dado está rodando...'
  setTimeout(() => {
    let resultado = lanzarDado(numeroCaras)
    caraDado.textContent = resultado
    if(resultado === numeroCaras){
      mensajeDado.textContent = `Máxima puntuación: ${resultado}`
    } else if(resultado === 1){
      mensajeDado.textContent = ':( pringao, has sacado un 1'
    } else{
      mensajeDado.textContent = `Has sacado un ${resultado}`
    }
    if(primerLanzamiento){
      listaLanzamientos.textContent = ''
      primerLanzamiento = false
    }
    const nuevoResultado = document.createElement('span')
    nuevoResultado.textContent = resultado
    listaLanzamientos.prepend(nuevoResultado)
    if(listaLanzamientos.children.length > 10){
      // listaLanzamientos.lastElementChild.remove()
      btnLanzarDado.disabled = true
    }
  },1000)
})

//Funciones

function lanzarDado(numeroCaras = 6){
  return Math.floor(Math.random()*numeroCaras)+1
}
