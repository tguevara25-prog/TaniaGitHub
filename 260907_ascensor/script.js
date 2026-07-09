let plantaDestino = document.getElementById('planta')
const btnGo = document.getElementById('btnGo')
let recorrido = document.querySelector('.recorrido')
let plantaInicial = document.getElementById('plantaUsuario')

btnGo.addEventListener('click', moverAscensor)

function moverAscensor(){
  let destino = Number(plantaDestino.value)
  let plantaActual = Number(plantaUsuario.value)

  recorrido.innerHTML = ''

  if((destino < 0 || destino > 10) || (plantaActual < 0 || plantaActual > 10)){
    recorrido.innerHTML = 'La planta debe estar entre 0 y 10'
  } else if (destino > plantaActual){
    recorrido.innerHTML += 'Cerrando puertas... <br>'
    recorrido.innerHTML += 'Subiendo... <br>'
    while (plantaActual <= destino){
      recorrido.innerHTML += `Planta ${plantaActual} <br>`
      plantaActual++   
  }
  recorrido.innerHTML += 'Abriendo puertas... <br>'
  recorrido.innerHTML += `Has llegado a la planta ${destino}`
  } else if (destino < plantaActual){
    recorrido.innerHTML += 'Cerrando puertas... <br>'
    recorrido.innerHTML += 'Bajando... <br>'
    while (plantaActual >= destino){
      recorrido.innerHTML += `Planta ${plantaActual} <br>`
      plantaActual--
  }
  recorrido.innerHTML += 'Abriendo puertas... <br>'
  recorrido.innerHTML += `Has llegado a la planta ${destino}`
  } else {
    recorrido.innerHTML = 'Sal del ascensor'
  }
}