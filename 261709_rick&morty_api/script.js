const personaje = document.querySelector('.personaje')

// const url = 'https://rickandmortyapi.com/api/character/1'
//667, 94
const urlGeneral = 'https://rickandmortyapi.com/api/character'

let idAleatorio = Math.floor(Math.random()*826+1)

function imprimirPersonaje(elPersonaje){
  personaje.innerHTML = `
    <img src="${elPersonaje.image}">
    <h2>Nombre: ${elPersonaje.name}</h2>
    <p>Estado: ${elPersonaje.status}</p>
    <p>Especie: ${elPersonaje.species}</p>
    <p>Ubicación: ${elPersonaje.location.name}</p>
    <p>Origen: ${elPersonaje.origin.name}</p>
    `
}

function cargarPersonaje(id){
  const urlRandom = `${urlGeneral}/${id}`
  fetch(urlRandom)
  .then(respuesta => respuesta.json())
  .then(datos => imprimirPersonaje(datos))
}

// fetch(url)
//   .then(respuesta =>
//     respuesta.json()
//   )
//   .then(datos =>{
//     console.log(datos)
//     imprimirPersonaje(datos)
// })

cargarPersonaje(idAleatorio)