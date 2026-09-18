const video = document.getElementById('video')
const btnAnalizar = document.getElementById('btnAnalizar')
const resultado = document.getElementById('resultado')
const barra = document.getElementById('barra')
const progreso = document.getElementById('progreso')

btnAnalizar.addEventListener('click', ()=>{
  console.log('Botón clicado')
  resultado.textContent = 'Analizando...'
  barra.style.display = 'block'
  progreso.style.width = '0%'
  let porcentaje = 0
  const intervalo = setInterval(()=>{
    porcentaje += 2
  },40)
  setTimeout(()=>{
    // resultado.textContent = 'Análisis terminado'
    const resultados = [
      'Dice la verdad, fijo',
      'Miente más que habla',
      'Resultado incierto. EL sujeto desvió la mirada',
      '100% verdad',
      'Pupilas dilatadas, trola total',
      'Datos alterados, no es humano'
    ]
    const elegido = resultados[Math.floor(Math.random()*resultados.length)]

  }, 2000)
})

resultado.textContent = 'Detector preparado'

navigator.mediaDevices.getUserMedia({video:true})
.then(transmision =>{
  console.log('Cámara activa')
  video.srcObject = transmision
})
.catch(error =>{
  console.error(error)
})

