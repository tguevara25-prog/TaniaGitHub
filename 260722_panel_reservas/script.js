//Declaración de variables

const actividad = document.getElementById('actividad')
const numeroPlazas = document.getElementById('numeroPlazas')
const btnReserva = document.getElementById('btnReserva')
const mensajeReserva = document.getElementById('mensajeReserva')

const formularioReserva = document.getElementById('formularioReserva')
const campoNombre = document.getElementById('nombre')
const mensajeNombre = document.getElementById('mensajeNombre')
const selectorTurno = document.getElementById('turno')
const comentario = document.getElementById('comentario')
const contadorCaracteres = document.getElementById('contadorCaracteres')
const resultadoFormulario = document.getElementById('resultadoFormulario')

const listaParticipantes = document.getElementById('listaParticipantes')

let reservado = false
let plazasDisponibles = 5

//Listeners
btnReserva.addEventListener('mouseenter', ()=>{
  if(reservado){
    btnReserva.textContent = 'Cancelar Reserva'
  } else{
    btnReserva.textContent = 'Reservar'
  }
})

btnReserva.addEventListener('mouseleave', ()=>{
  if(reservado){
    btnReserva.textContent = 'Reservado'
  } else{
    btnReserva.textContent = 'Disponible'
  }
})

btnReserva.addEventListener('click', ()=>{
  reservado = !reservado
  if(reservado){
    plazasDisponibles--
    btnReserva.textContent = 'Reservado'
    mensajeReserva.textContent = 'Reserva realizada'
    mensajeReserva.classList.add('reservada')
  } else {
    plazasDisponibles++
    btnReserva.textContent = 'Disponible'
    mensajeReserva.textContent = 'Reserva cancelada'
    mensajeReserva.classList.remove('reservada')
  }
  numeroPlazas.textContent = plazasDisponibles
})

campoNombre.addEventListener('focus', ()=>{
    campoNombre.classList.add('campo-activo')
})

campoNombre.addEventListener('blur', ()=>{
    campoNombre.classList.remove('campo-activo')
    if(campoNombre.value.trim()===''){
        mensajeNombre.textContent = 'El nombre es obligatorio, amigo'
        mensajeNombre.classList.add('error')
    } else {
        mensajeNombre.textContent = 'Nombre correcto'
        mensajeNombre.classList.remove('error')
        mensajeNombre.classList.add('correcto')
    }
})

comentario.addEventListener('input', ()=>{
    const cantidadCaracteres = comentario.value.length;

    contadorCaracteres.textContent = `${cantidadCaracteres} de 100`;

    if(cantidadCaracteres >= 80){
      contadorCaracteres.classList.add('error');
    } else{
      contadorCaracteres.classList.remove('error')
    }
});

selectorTurno.addEventListener('change', ()=>{
  if(selectorTurno.value === ''){
    resultadoFormulario.textContent = 'Todavía no has seleccionado un turno'
    resultadoFormulario.classList.add('error')
  } else{
    resultadoFormulario.classList.remove('error')
    resultadoFormulario.textContent = `Turno seleccionado: ${selectorTurno.value}`
  }
})

formularioReserva.addEventListener('submit', (e)=>{
  e.preventDefault()
  // console.log('Formulario enviado')
  if(!reservado){
    resultadoFormulario.textContent = 'Primero debes reservar una plaza'
    resultadoFormulario.classList.add('error')
    resultadoFormulario.classList.remove('correcto')
    return
  }
  const nombre = campoNombre.value.trim()
  const turno = selectorTurno.value
  if(nombre === '' || turno === ''){
    resultadoFormulario.textContent = 'Completa tu nombre y turno'
    resultadoFormulario.classList.add('error')
    resultadoFormulario.classList.remove('correcto')
    return
  }
  resultadoFormulario.textContent = `Reserva confirmada para ${nombre} en el turno de ${turno}`

  resultadoFormulario.classList.remove('error')
  resultadoFormulario.classList.add('correcto')

  //A partir de aquí creamos la lista de participantes
  const aviso = document.querySelector('.aviso')
  if(aviso){
    aviso.remove()
  }

  const nuevoParticipante = document.createElement('article')
  nuevoParticipante.classList.add('participante')
  nuevoParticipante.innerHTML = `<span>${nombre} - Turno de ${turno}</span><button
  class='btnEliminar'>Eliminar</button>`
  listaParticipantes.append(nuevoParticipante)

  formularioReserva.reset()
  contadorCaracteres = '0'
  mensajeNombre.textContent = ''
})

document.addEventListener('keydown', (e)=>{
  // console.log(e.key)
  if(e.key === 'Escape'){
    mensajeReserva.textContent = ''
    resultadoFormulario.textContent = ''
  }
})