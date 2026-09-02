//Declaraciones
const nombre = document.getElementById('nombre')
const btnValidar = document.querySelector('#btnValidar')
const resultado = document.getElementById('resultado')

//Listeners
// btnValidar.addEventListener('click', function(){

// })
btnValidar.addEventListener('click', () => {
  let datoInput = nombre.value.trim()

  if(datoInput.length < 2){
    resultado.textContent = 'Tu nombre debe tener al menos 2 caracteres'
  } else if (datoInput.includes(' ')){
    // resultado.textContent = 'Tu nombre no puede contener espacios'
    datoInput = datoInput.replace(/\s/g, '')
     resultado.textContent = `${datoInput.toUpperCase()}, tu nombre tiene 
    ${datoInput.length} caracteres` 
  } else{
    resultado.textContent = `${datoInput.toUpperCase()}, tu nombre tiene 
    ${datoInput.length} caracteres` 
  }
  
})

// function validar (){

// }