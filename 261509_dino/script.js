const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const gravedad = 0.6

const dino = {
  x: 50,
  y: 200,
  ancho: 40,
  alto: 80,
  velocidadY: 0
}

const cactus = {
  x:750,
  y:240,
  ancho:25,
  alto:40
}

let puntos = 0

let finJuego = false

document.addEventListener('keydown', (ev)=>{
  if(ev.code === 'Space' && dino.y === 200){
    dino.velocidadY = -12
  }
})

function dibujarDino(){
  ctx.fillStyle = '#826ef0'
  ctx.fillRect(
    dino.x,
    dino.y,
    dino.ancho,
    dino.alto
  )
}

function dibujarSuelo(){
  ctx.fillStyle = '#72a378'
  ctx.fillRect(0,280,canvas.width,2)
}


function dibujarCactus(){
  ctx.fillStyle = '#6aa30f'
  ctx.fillRect(
    cactus.x,
    cactus.y,
    cactus.ancho,
    cactus.alto
  )
}

function actualizar(){
  if(finJuego === true){
    ctx.fillStyle = "black"
    ctx.font = '40px Arial'
    ctx.fillText('Fin del juego', 280,140)
    return
  }
  ctx.clearRect(0,0,canvas.width,canvas.height)
  cactus.x = cactus.x - 5
  if(cactus.x < -cactus.ancho){
    cactus.x = canvas.width
  }

  dino.y = dino.y + dino.velocidadY
  dino.velocidadY = dino.velocidadY + gravedad
  if(dino.y >= 200){
    dino.y = 200
    dino.velocidadY = 0
  }
  
  const colision =
  dino.x < cactus.x + cactus.ancho &&
  dino.x + dino.ancho > cactus.x &&
  dino.y < cactus.y + cactus.alto &&
  dino.y + dino.alto > cactus.y

  if(colision){
    finJuego = true
  }
  dibujarDino()
  dibujarSuelo()
  dibujarCactus()
  requestAnimationFrame(actualizar)
}

actualizar()
