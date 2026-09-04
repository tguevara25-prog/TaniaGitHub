const inputDeseo = document.getElementById('deseo')
const btnAñadir = document.getElementById('btnAñadir')
const lista = document.getElementById('lista')
const mensajes = document.getElementById('mensajes')
const btnUrgente = document.getElementById('btnUrgente')
let deseos = []

const deseosGuardados = localStorage.getItem('deseos')

if(deseosGuardados !== null){
  deseos = JSON.parse(deseosGuardados)
}

const btnBuscar = document.getElementById('btnBuscar')
const inputBusqueda = document.getElementById('busqueda')

const origen = document.getElementById('origen')
const nuevo = document.getElementById('nuevo')
const btnEditar = document.getElementById('btnEditar')

//Listeners
btnAñadir.addEventListener('click', ()=>{
  const deseo = inputDeseo.value.trim()
  if(deseo.length === 0){
    mensajes.textContent = '¡Desea algo!'
    return
  }

  //Verificar si el elemento está en el array (o no)
  if(deseos.includes(deseo)){
    mensajes.textContent = '¡Ya lo has pedido!'
    return
  }

  mensajes.textContent = ''
  deseos.push(deseo)
  console.log(deseos)
  mostrarDeseos()

  inputDeseo.value = ''
})

btnUrgente.addEventListener('click', ()=>{
  const deseo = inputDeseo.value.trim()
  if(deseo.length === 0){
    mensajes.textContent = '¡Desea algo!'
    return
  }

  //Verificar si el elemento está en el array (o no)
  if(deseos.includes(deseo)){
    mensajes.textContent = '¡Ya lo has pedido!'
    return
  }

  mensajes.textContent = ''
  deseos.unshift(deseo)
  console.log(deseos)
  mostrarDeseos()

  inputDeseo.value = ''
})

btnBuscar.addEventListener('click', ()=>{
  const texto = inputBusqueda.value.trim()
  const posicion = deseos.indexOf(texto)
  if(posicion === -1){
    mensajes.textContent = '¡No lo has pedido!'
  } else {
    mensajes.textContent = `Tu deseo está en la posición ${posicion+1} y en el índice ${posicion}`
  }
})

btnEditar.addEventListener('click', ()=>{
  const textoOriginal = origen.value.trim()
  const textoNuevo = nuevo.value.trim()
  
  const posicion = deseos.indexOf(textoOriginal)
  if(posicion === -1){
    mensajes.textContent = 'Nunca has deseado esto...'
    return
  }

  deseos[posicion] = textoNuevo
  mostrarDeseos()
  mensajes.textContent = '¡Deseo actualizado!'
})

//Funciones
function mostrarDeseos(){
  lista.innerHTML = ''

  for(let i = 0; i < deseos.length; i++){
    const li = document.createElement('li')
    li.textContent = deseos[i]
    lista.appendChild(li)
  }
  localStorage.setItem('deseos', JSON.stringify(deseos))
}