// 1. Capturamos los elementos del HTML
let botonCalcular = document.getElementById("boton-calcular");
let producto = document.getElementById("producto");
let cantidad = document.getElementById("cantidad");
let resultadoPedido = document.getElementById("resultado-pedido");
let listaCirculos = document.getElementById("lista-circulos");

let mensajeCirculo = document.getElementById("mensaje-circulo");


// 2. Añadimos los eventos
botonCalcular.addEventListener("click", calcularPedido);


// 3. Mensajes del botón inicial
let mensajes = [
  "Hoy te corresponde un círculo fucsia con energía de viernes.",
  "Tu círculo ideal es verde lima: intenso, fresco y ligeramente escandaloso.",
  "Necesitas un círculo azul neón para ordenar el caos con estilo.",
  "Has desbloqueado el círculo premium: redondo, brillante y totalmente innecesario.",
  "Tu startup interior pide un círculo gigante con certificado de molonidad."
];

let contador = 0;

function cambiarCirculo() {
  mensajeCirculo.innerHTML = mensajes[contador];

  contador++;

  if (contador === mensajes.length) {
    contador = 0;
  }
}


// 4. Función principal de la calculadora
function calcularPedido() {
  let productoElegido = producto.value;
  let cantidadElegida = Number(cantidad.value);

  let nombreProducto = "";
  let precioUnidad = 0;
  let gastosEnvio = 3.50;
  let descuento = 0;
  let mensajeCarrito = "";

  // Limpiamos los resultados antes de volver a escribir
  resultadoPedido.innerHTML = "";
  listaCirculos.innerHTML = "";

  // Validación básica
  if (cantidadElegida <= 0) {
    resultadoPedido.innerHTML = "No has escrito una cantidad válida. Incluso los círculos necesitan existir.";
    return;
  }

  // Decidimos qué producto ha elegido el usuario
  if (productoElegido === "fucsia") {
    nombreProducto = "Círculo Fucsia";
    precioUnidad = 9.99;
  } else if (productoElegido === "zen") {
    nombreProducto = "Círculo Zen";
    precioUnidad = 14.99;
  } else {
    nombreProducto = "Círculo Premium";
    precioUnidad = 19.99;
  }

  let subtotal = precioUnidad * cantidadElegida;

  // Condicionales del carrito
  if (cantidadElegida >= 5) {
    descuento = subtotal * 0.15;
    mensajeCarrito = "Esto ya parece una colección circular. Te aplicamos un 15% de descuento.";
  } else if (cantidadElegida >= 3) {
    mensajeCarrito = "Vas camino de convertirte en fan oficial de los círculos.";
  } else if (cantidadElegida === 1) {
    mensajeCarrito = "Has añadido tu primer círculo. Todo gran imperio empieza con una forma redonda.";
  } else {
    mensajeCarrito = "Tu carrito empieza a ponerse molón.";
  }

  let total = subtotal - descuento + gastosEnvio;

  resultadoPedido.innerHTML =
    mensajeCarrito + "<br><br>" +
    "Producto: " + nombreProducto + "<br>" +
    "Cantidad: " + cantidadElegida + "<br>" +
    "Precio por unidad: " + precioUnidad.toFixed(2) + " €<br>" +
    "Subtotal: " + subtotal.toFixed(2) + " €<br>" +
    "Descuento: -" + descuento.toFixed(2) + " €<br>" +
    "Gastos de envío circular: " + gastosEnvio.toFixed(2) + " €<br>" +
    "<strong>Total final: " + total.toFixed(2) + " €</strong>";

  // BUCLE: repetimos una línea por cada círculo comprado
  for (let i = 1; i <= cantidadElegida; i++) {
    listaCirculos.innerHTML += "<p>" + nombreProducto + " número " + i + " preparado para el pedido.</p>";
  }
}