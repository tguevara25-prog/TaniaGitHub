const nombreLugar = document.getElementById('nombreLugar')
const btnTiempo = document.getElementById('btnTiempo');
const mensaje = document.getElementById('mensaje');
const temperatura = document.getElementById('temperatura');
const sensacion = document.getElementById('sensacion');
const humedad = document.getElementById('humedad');
const viento = document.getElementById('viento');
const nubosidad = document.getElementById('nubosidad');
const precipitacionDato = document.getElementById('precipitacionDato');
const descripcion = document.getElementById('descripcion');
const iconoClima = document.getElementById('iconoClima');
const ubicacion = document.getElementById('ubicacion');
const precipitacion = document.getElementById('precipitacion');

btnTiempo.addEventListener('click', () => {
  mensaje.textContent = 'Obteniendo tu ubicación...';
  navigator.geolocation.getCurrentPosition(obtenerTiempo, errorUbicacion);
});

function obtenerTiempo(posicion) {
  const lat = posicion.coords.latitude;
  const lon = posicion.coords.longitude;

  mensaje.textContent = 'Consultando el tiempo...';

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,precipitation,rain,showers,snowfall,weather_code,cloud_cover&timezone=auto`;

  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=es`)
  .then(respuesta => respuesta.json())
  .then(lugar => {
    const ciudad = lugar.city || lugar.locality || 'Tu ubicación'
    const pais = lugar.countryName || ''

    nombreLugar.textContent = `${ciudad}, ${pais}`
  })
  
  fetch(url)
    .then(respuesta => {
      if (!respuesta.ok) throw new Error('No se pudo obtener el tiempo');
      return respuesta.json();
    })
    .then(datos => mostrarTiempo(datos))
    .catch(error => {
      console.error(error);
      mensaje.textContent = 'Ha ocurrido un error al consultar el tiempo.';
    });
}

function mostrarTiempo(datos) {
  const clima = datos.current;
  const estado = obtenerEstado(clima.weather_code, clima.is_day);

  temperatura.textContent = Math.round(clima.temperature_2m);
  sensacion.textContent = `${Math.round(clima.apparent_temperature)} °C`;
  humedad.textContent = `${clima.relative_humidity_2m}%`;
  viento.textContent = `${Math.round(clima.wind_speed_10m)} km/h`;
  nubosidad.textContent = `${clima.cloud_cover}%`;
  precipitacionDato.textContent = `${clima.precipitation} mm`;

  descripcion.textContent = estado.nombre;
  iconoClima.textContent = estado.icono;
  ubicacion.textContent = `Lat ${clima ? 'detectada' : ''}`;

  cambiarCielo(estado.tipo);
  mensaje.textContent = 'Ubicación detectada correctamente.';
}

function obtenerEstado(codigo, esDeDia) {
  if (!esDeDia) return {tipo:'noche', nombre:'Noche', icono:'🌙'};
  if (codigo === 0) return {tipo:'soleado', nombre:'Despejado', icono:'☀️'};
  if (codigo === 1 || codigo === 2) return {tipo:'parcial', nombre:'Parcialmente nublado', icono:'🌤️'};
  if (codigo === 3) return {tipo:'nublado', nombre:'Nublado', icono:'☁️'};
  if (codigo === 45 || codigo === 48) return {tipo:'nublado', nombre:'Niebla', icono:'🌫️'};
  if (codigo >= 51 && codigo <= 67) return {tipo:'lluvia', nombre:'Lluvia', icono:'🌧️'};
  if (codigo >= 71 && codigo <= 77) return {tipo:'nieve', nombre:'Nieve', icono:'❄️'};
  if (codigo >= 80 && codigo <= 82) return {tipo:'lluvia', nombre:'Chubascos', icono:'🌦️'};
  if (codigo >= 95) return {tipo:'tormenta', nombre:'Tormenta', icono:'⛈️'};
  return {tipo:'nublado', nombre:'Tiempo variable', icono:'🌥️'};
}

function cambiarCielo(tipo) {
  document.body.className = tipo;
  precipitacion.innerHTML = '';

  if (tipo === 'lluvia' || tipo === 'tormenta') crearLluvia();
  if (tipo === 'nieve') crearNieve();
}

function crearLluvia() {
  for (let i = 0; i < 130; i++) {
    const gota = document.createElement('div');
    gota.classList.add('gota');
    gota.style.left = Math.random() * 100 + '%';
    gota.style.animationDuration = (0.4 + Math.random() * 0.5) + 's';
    gota.style.animationDelay = Math.random() * 2 + 's';
    precipitacion.appendChild(gota);
  }
}

function crearNieve() {
  for (let i = 0; i < 70; i++) {
    const copo = document.createElement('div');
    copo.classList.add('copo');
    copo.textContent = '❄';
    copo.style.left = Math.random() * 100 + '%';
    copo.style.fontSize = (8 + Math.random() * 15) + 'px';
    copo.style.animationDuration = (5 + Math.random() * 8) + 's';
    copo.style.animationDelay = Math.random() * 5 + 's';
    precipitacion.appendChild(copo);
  }
}

function errorUbicacion(error) {
  console.error(error);
  mensaje.textContent = 'No hemos podido obtener tu ubicación.';
}
