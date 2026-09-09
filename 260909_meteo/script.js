// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m&timezone=Europe%2FBerlin

const btnTiempo = document.getElementById('btnTiempo')
const mensaje = document.getElementById('mensaje')
const resultado = document.getElementById('resultado')

btnTiempo.addEventListener('click', ()=>{
  navigator.geolocation.getCurrentPosition((posicion)=>{
    console.log(posicion)
    const lat = posicion.coords.latitude
    const lon = posicion.coords.longitude
  })
})