const btnFoto = document.getElementById('btnFoto')
const foto = document.getElementById('foto')
const mensaje = document.getElementById('mensaje')

btnFoto.addEventListener('click', () => {
  fetch('https://picsum.photos/200/300')
  //Te pido esto, prométeme que...
    .then(response =>{
      //Cuando esta respuesta llegue, haz lo que viene a continuación.
      // console.log(response)
      return response.blob()
      //El objeto blob() convierte la respuesta en un bloque de datos que compone la imagen.
    })

    .then(imagen =>{
      console.log(imagen)
      //Con la respuesta blob() no puedo cargar el src de la img, así que creo una url
      const urlImagen = URL.createObjectURL(imagen)
      //Planifico la url remasterizada en el atributo src de la img
      foto.src = urlImagen
    })
})

