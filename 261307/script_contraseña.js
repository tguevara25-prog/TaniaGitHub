//Paso 1: pal1 vocales MAY

// Paso2: pal2 todo MIN

// Paso 3: mezclamos, lo que sobra lo añadimos

// Paso 4: añadimos núm aleatorio entre 100 y 99

function generarContra(pal1, pal2){
  
}

function vocalesMay(palabra){
  const vocales = 'aeiouáéíóúàèòüï'
  let resultado = ''
  for(let i =0; i < palabra.length; i++){
      let letra = palabra[i]
      if(vocales.includes(letra.toLowerCase())){
        resultado += letra.toUpperCase()
      } else {
        resultado += letra
      }
  }
  return resultado
}

// let prueba = vocalesMay('tigre')
// console.log(prueba)

function consonantesMIN(palabra){
  const vocales = 'aeiouáéíóúàèòüï'
  let resultado = ''
  for (let i =0; i < palabra.length; i++){
    let letra = palabra[i]
    if(!vocales.includes(letra.toLowerCase())){
      resultado += letra.toLowerCase()
    } else {
      resultado += letra
    }
  }
  return resultado
}

function mezclarPalabras(palabra1, palabra2){
  let resultado = ''
  let laMasLarga = Math.max(palabra1.length, palabra2.length)
  for(let i = 0; i < laMasLarga; i++){
    if(i < palabra1.length){
      resultado += palabra1[i]
    }
    if(i < palabra2.length){
      resultado += palabra2[i]
    }
  }
  return resultado
}

// let mezcla = mezclarPalabras('patata', 'roja')
// console.log(mezcla)

function numeroAleatorio(){
  return Math.floor(Math.random()*900)+100
}

function generarContra(pal1, pal2){
  const p1 = vocalesMay(pal1)
  const p2 = consonantesMIN(pal2)
  let contraseña = mezclarPalabras(p1, p2)
  contraseña += numeroAleatorio()
  return contraseña
}

// console.log(generarContra('mariposa', 'TIGRE'))

document.getElementById('generar').addEventListener('click', function(){
  const palabra1 = document.getElementById('palabra1').value
  const palabra2 = document.getElementById('palabra2').value

  if(palabra1 && palabra2){
    const resultado = generarContra(palabra1, palabra2)
    document.getElementById('resultado').textContent = resultado
  } else{
    document.getElementById('resultado').textContent ='Introduce 2 palabras'
  }
})