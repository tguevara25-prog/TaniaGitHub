const inputPersonaje = document.getElementById("numPersonaje");
const btnBuscar = document.getElementById("btnBuscar");
const mensaje = document.getElementById("mensaje");
const detalles = document.getElementById("detalles");

// fetch('https://jsonplaceholder.typicode.com/users/5')
//   .then(respuesta => {
//     // console.log(respuesta)
//     return respuesta.json()
//   })
//   .then(datos => {
//     console.log(datos)
//   })

//Listeners
btnBuscar.addEventListener("click", () => {
  const id = inputPersonaje.value;

  if (id === "") {
    mensaje.textContent = "Introduce un número de personaje";
    return;
  }
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  fetch(url)
    .then((respuesta) => {
      // console.log(respuesta)
      return respuesta.json();
    })
    .then((datos) => {
      console.log(datos);
      detalles.innerHTML = `
        <h2>${datos.name}</h2>
        <p>Alias: ${datos.username}</p>
        <p>Email: ${datos.email}</p>
        <p>Teléfono: ${datos.phone}</p>
        <p></p>
        
        `
    });
});
