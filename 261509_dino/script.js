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

let ejercitoCactus = []

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
   ejercitoCactus.forEach((cactus) => {
    ctx.fillStyle = '#6aa30f'
    ctx.fillRect(
      cactus.x,
      cactus.y,
      cactus.ancho,
      cactus.alto
    )
  })
}

function crearCactus() {

    // Altura aleatoria entre 30 y 70 aproximadamente
    const alto = Math.random() * 40 + 30

    // El cactus puede aparecer justo después del canvas
    // o bastante más lejos.
    // Así la distancia entre cactus no será siempre igual.
    const distancia = Math.random() * 400

    ejercitoCactus.push({

        // El cactus aparece por la derecha,
        // pero no siempre exactamente en el mismo punto
        x: canvas.width + distancia,

        // Lo colocamos apoyado en el suelo
        y: 280 - alto,

        ancho: 25,

        alto: alto,

        // Cada cactus tendrá una velocidad distinta
        // entre 4 y 6 píxeles por frame aproximadamente
        velocidad: Math.random() * 2 + 4,

        // Nos permite saber si este cactus
        // ya ha generado el siguiente
        otro: false,

        // Cada cactus tendrá un momento diferente
        // para crear el siguiente cactus.
        //
        // Algunos lo harán pronto y habrá dos cactus juntos.
        // Otros lo harán tarde y estarán más separados.
        momentoNuevoCactus:
            Math.random() * 300 + 200
    })
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
  ejercitoCactus.forEach((cactus) => {
       cactus.x = cactus.x - cactus.velocidad
        if (
            cactus.x <= cactus.momentoNuevoCactus &&
            cactus.otro === false
        ) {
            crearCactus()
            cactus.otro = true
        }
        if (cactus.x < -cactus.ancho) {

            puntos++
        }
    })
    ejercitoCactus = ejercitoCactus.filter((cactus) => {
        return cactus.x > -cactus.ancho
    })

    dino.y = dino.y + dino.velocidadY
    dino.velocidadY = dino.velocidadY + gravedad
    if (dino.y >= 200) {
        dino.y = 200
        dino.velocidadY = 0
    }
    ejercitoCactus.forEach((cactus) => {

        const colision =
            dino.x < cactus.x + cactus.ancho &&
            dino.x + dino.ancho > cactus.x &&
            dino.y < cactus.y + cactus.alto &&
            dino.y + dino.alto > cactus.y

        if (colision) {
            finJuego = true
        }
    })

    ctx.fillStyle = 'black'
    ctx.font = '20px Arial'
    ctx.fillText(
        `Puntos: ${puntos}`,
        650,
        30
    )

    dibujarDino()
    dibujarSuelo()
    dibujarCactus()
    requestAnimationFrame(actualizar)
}

crearCactus()
actualizar()
