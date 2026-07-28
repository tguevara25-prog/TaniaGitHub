const burger = document.getElementById('burger')
const salir = document.getElementById('salir')
const nav = document.querySelector('nav')

const cajaAnimada = document.querySelector('.cajaAnimada')

btnEscalar = document.getElementById('btnEscalar')
btnRotar = document.getElementById('btnRotar')
btnOpacidad = document.getElementById('btnOpacidad')
btnRedondear = document.getElementById('btnRedondear')
btnCombo =document.getElementById('btnCombo')
btnReset = document.getElementById('btnReset')

btnContador = document.getElementById('btnContador')
btnReseteo = document.getElementById('btnReseteo')
let contador = 0
let intervaloId = null
let elementoContador = document.getElementById('contador')

const circulo = document.querySelector('.circulo')
const btnInicio = document.getElementById('btnInicio')
const btnStop = document.getElementById('btnStop')

let posicion = 0
let intervaloMov = null
let cajaMovimiento = document.querySelector('.controlEspacio')

const mosca = document.querySelector('.mosca')
const btnComienzo = document.getElementById('btnComienzo')
const btnParo = document.getElementById('btnParo')
const cajaCursor = mosca.closest('.controlEspacio')
let posInicial = {left: 0, top:0 }
let movimiento = false 

//Listeners

burger.addEventListener('click', ()=>{
    nav.classList.add('mostrar')
})

salir.addEventListener('click', ()=>{
    nav.classList.remove('mostrar')
})

btnEscalar.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('escalar')
})

btnRotar.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('rotar')
})

btnOpacidad.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('opacidad')
})

btnRedondear.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('redondear')
})
btnCombo.addEventListener('click', ()=>{
    cajaAnimada.classList.toggle('combo')
})

btnReset.addEventListener('click', ()=>{
    cajaAnimada.className = 'cajaAnimada'
})

//Temporizador
btnContador.addEventListener('click', iniciarContador)
btnReseteo.addEventListener('click', detenerContador)

//Movimiento

btnInicio.addEventListener('click', (e)=>{
    if(intervaloMov === null){
        intervaloMov = setInterval(()=>{
            const limite = cajaMovimiento.clientWidth
            const anchoCirculo = circulo.offsetWidth
            if((posicion + 5 + anchoCirculo ) > limite){
                clearInterval(intervaloMov)
                intervaloMov = null
                return
            }
            // posicion = posicion +5
            posicion += 5
            circulo.style.left = posicion + 'px'
        }, 50)
    }
})

btnStop.addEventListener('click', (e)=>{
    clearInterval(intervaloMov)
    intervaloMov = null
})

//Temporizador

function iniciarContador(e){
    if(intervaloId === null){
        intervaloId = setInterval(()=>{
            contador++
            elementoContador.innerHTML = contador
        }, 1000)
    }
}

function detenerContador(e){
    clearInterval(intervaloId)
    intervaloId = 0
    contador = 0
    elementoContador.innerHTML = contador
}

//Cursor

btnComienzo.addEventListener('click', ()=>{
    movimiento = true
    document.addEventListener('mousemove', seguirMouse)
})

btnParo.addEventListener('click', ()=>{
    movimiento = false
    document.removeEventListener('mousemove', seguirMouse)
    mosca.style.left = 0
    mosca.style.top = 0
})

function seguirMouse(e){
    if(!movimiento) return
    //Centro la mosca
    const corral = cajaCursor.getBoundingClientRect()
    
    const offsetX = e.clientX - corral.left
    const offsetY = e.clientY - corral.top

    let centroX = offsetX - mosca.offsetWidth/2
    let centroY = offsetY - mosca.offsetHeight/2

    mosca.style.left = centroX + 'px'
    mosca.style.top = centroY + 'px'
}