const bares = [
  {
    id: 1,
    nombre: "Bar Atlanta",
    visitado: false
  },
  {
    id: 2,
    nombre: "Bar El Toro",
    visitado: false
  },
  {
    id: 3,
    nombre: "Fat Cat",
    visitado: false
  },
  {
    id: 4,
    nombre: "La Prudència",
    visitado: false
  },
  {
    id: 5,
    nombre: "Las Fernández ",
    visitado: false
  },
  {
    id: 6,
    nombre: "Nun Cultural Café",
    visitado: false
  },
  {
    id: 7,
    nombre: "Chula Vista",
    visitado: false
  },
  {
    id: 8,
    nombre: "El Magraner Boig",
    visitado: false
  },
  {
    id: 9,
    nombre: "El Cafetí",
    visitado: false
  },
  {
    id: 10,
    nombre: "La Ravala",
    visitado: false
  },
  {
    id: 11,
    nombre: "La Monroe",
    visitado: false
  },
  {
    id: 12,
    nombre: "Arume",
    visitado: false
  },
  {
    id: 13,
    nombre: "La Morera",
    visitado: false
  },
  {
    id: 14,
    nombre: "Bar Mendizábal",
    visitado: false
  },
  {
    id: 15,
    nombre: "Dr. Beer & Mr. Fried",
    visitado: false
  },
  {
    id: 16,
    nombre: "Biocenter",
    visitado: false
  },
  {
    id: 17,
    nombre: "Bar Costa",
    visitado: false
  },
  {
    id: 18,
    nombre: "Clemen's Boqueria",
    visitado: false
  },
  {
    id: 19,
    nombre: "L'Universal",
    visitado: false
  },
]

//Acceso

const btnEntrar = document.getElementById('btnEntrar')

function obtenerNombreUsuario(){
  const nombre = document.getElementById('nombre').value
  return nombre 
}

function nombreValido(nombre){
  if(nombre.trim()===''){
    return false
  } else {
    return true
  }
}

function mostrarSaludo(nombre){
  const saludo = document.getElementById('saludo')
  saludo.textContent = `Hola ${nombre}`
}

btnEntrar.addEventListener('click', function(){
  const nombre = obtenerNombreUsuario()
  if(nombreValido(nombre)===false){
    document.getElementById('mensajeAcceso').textContent = '¡Introduce tu nombre!'
    return
  }
  document.getElementById('mensajeAcceso').textContent = '' 
  mostrarSaludo(nombre)

  document.getElementById('acceso').style.display = 'none'
  document.getElementById('pasaporte').style.display = 'block'

  mostrarBares()
})

//Gestionamos los bares

function buscarBarPorId(idBar){
  for(let i = 0; i < bares.length; i++){
    if(bares[i].id === idBar){
      return bares[i]
    }
  }
  return null
}

function sellarBar(idBar){
  const bar = buscarBarPorId(idBar)

  if(bar === null){
    return 'No se ha encontrado el bar'
  }

  if(bar.visitado === true){
    return 'Este bar ya estaba sellado'
  }

  bar.visitado = true
  return `Has sellado tu visita en ${bar.nombre}`
}

//Función para mostrar los bares

function mostrarBares(){
  const listaBares = document.getElementById('listaBares')
  listaBares.innerHTML = ''
  for(let i = 0; i < bares.length; i++){
    const tarjeta = document.createElement('article')
    const numero = document.createElement('p')
    const nombre = document.createElement('h3')
    const estado = document.createElement('p')
    const boton = document.createElement('button')

    tarjeta.classList.add('bar') //pendiente
    numero.classList.add('numero-bar') //pendiente
    estado.classList.add('estado') //pendiente

    numero.textContent = `Parada ${bares[i].id}`
    nombre.textContent = bares[i].nombre

    if(bares[i].visitado === true){
      estado.textContent = 'Visita sellada'
      boton.textContent = 'Ya sellado'
      boton.disabled = true
      tarjeta.classList.add('bar-visitado')
    } else {
      estado.textContent = 'Pendiente'
      boton.textContent = 'Sellar visita'
    }

    boton.addEventListener('click', function(){
      const mensaje = sellarBar(bares[i].id)
      document.getElementById('mensajeSello').textContent = mensaje
      mostrarBares()
    })

    tarjeta.appendChild(numero)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(estado)
    tarjeta.appendChild(boton)

    listaBares.appendChild(tarjeta)
  }
}
