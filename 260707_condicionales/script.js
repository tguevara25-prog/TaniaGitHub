function verificarEdad() {
  let edad = document.getElementById("edad").value

  if(edad === '') {
    document.getElementById("resultado").innerHTML = "Por favor, ingresa tu edad."
  } else if(edad < 0) {
    document.getElementById("resultado").innerHTML = "Edad no válida."
  } else if(edad <= 15){
    document.getElementById("resultado").innerHTML = "No puedes acceder."
  } else if(edad == 16 || edad == 17){
    document.getElementById("resultado").innerHTML = "Puedes acceder con un acompañante."
  } else {
    document.getElementById("resultado").innerHTML = "Puedes acceder."
  }
}

//CONCIERTO

function verificarConcierto(){
  let edadConcierto = Number(document.getElementById('edadConcierto').value)
  let entrada = document.querySelector('input[name="entrada"]:checked')
  let resultadoConcierto = document.getElementById("resultadoConcierto")

  if (entrada.value === "no") {
    resultadoConcierto.innerHTML = "No entras bye"
  } else if (!edadConcierto){
    resultadoConcierto.innerHTML = "Introduce tu edad"
  } 
  else if (edadConcierto < 18) {
    resultadoConcierto.innerHTML = "Entras con acompañante"
  } else {
    resultadoConcierto.innerHTML = "Entras"
  }
}

// function cambiarIdioma(idioma) {
//   if(idioma === 'es') {
//     document.getElementById("saludo").innerHTML = "Hola"
//   } else if(idioma === 'en') {
//     document.getElementById("saludo").innerHTML = "Hello"
//   } else if(idioma === 'fr') {
//     document.getElementById("saludo").innerHTML = "Bonjour"
//   } else if(idioma === 'de') {
//     document.getElementById("saludo").innerHTML = "Hallo"
//   }
// }

function cambiarIdioma(idioma) {
  let saludo = document.getElementById('saludo')
  switch (idioma){
  case 'es':
    saludo.innerHTML = 'Holas'
    break
  case 'en':
    saludo.innerHTML = 'Hello'
    break
  case 'fr':
    saludo.innerHTML = 'Bonjour'
    break
  case 'de':
    saludo.innerHTML = 'Hallo'
    break
}
}
//PRECIOS ENTRADAS

function calcularPrecio (){
  let edadEntradas = Number (document.getElementById("edadEntradas").value)
  let numEntradas = Number (document.getElementById("numEntradas").value)
  let mensajePrecio = document.getElementById("precio")

  let precioEntrada

  if (edadEntradas < 5){
    precioEntrada = 0
  } else if (edadEntradas >= 6 && edadEntradas <= 17){
    precioEntrada = 4
  } else if (edadEntradas >= 18 && edadEntradas <= 64){
    precioEntrada = 7
  } else{
    precioEntrada = 5
  }

  let precioTotal = precioEntrada * numEntradas
  precio.innerHTML = "Tus " + numEntradas + " entradas cuestan: " + precioTotal + "€"
}