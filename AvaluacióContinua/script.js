// const botones = document.querySelectorAll(".card button");
// const contenedor = document.getElementById("contenedorToasts");
//PRODUCTOS
let cantidadLinterna = document.getElementById('cantidadLinterna')
const btnLinterna = document.getElementById('btnLinterna')
const mensajeLinterna = document.getElementById('mensajeLinterna')

let cantidadDibujos = document.getElementById('cantidadDibujos')
const btnDibujos = document.getElementById('btnDibujos')
const mensajeDibujos = document.getElementById('mensajeDibujos')

let cantidadKholinar = document.getElementById('cantidadKholinar')
const btnKholinar = document.getElementById('btnKholinar')
const mensajeKholinar = document.getElementById('mensajeKholinar')

let cantidadLlanuras = document.getElementById('cantidadLlanuras')
const btnLlanuras = document.getElementById('btnLlanuras')
const mensajeLlanuras = document.getElementById('mensajeLlanuras')

let cantidadRoshar = document.getElementById('cantidadRoshar')
const btnRoshar = document.getElementById('btnRoshar')
const mensajeRoshar = document.getElementById('mensajeRoshar')

const listaCarrito = document.getElementById('listaCarrito');
const totalProductos = document.getElementById("totalProductos");
const botonVaciar = document.getElementById("vaciarCarrito");

let total = 0;
let totalArmadura = 0;
let totalEspada = 0;
let totalMoldeador = 0;
let totalRoshar = 0;
let totalLlanuras = 0;
let totalKholinar = 0;
let totalDibujos = 0;
let totalLinterna = 0;

// botonVaciar.addEventListener('click', listaCarrito = )

btnLinterna.addEventListener('click', () => {
    calcularProductos(cantidadLinterna, 8, mensajeLinterna, 'Linterna de esferas')
})

btnDibujos.addEventListener('click', () => {
    calcularProductos(cantidadDibujos, 16, mensajeDibujos, 'Sketchbook de Shallan')
})

btnKholinar.addEventListener('click', () => {
    calcularProductos(cantidadKholinar, 2, mensajeKholinar, 'Mapa de Kholinar')
})

btnLlanuras.addEventListener('click', () => {
    calcularProductos(cantidadLlanuras, 2, mensajeLlanuras, 'Mapa: Llanuras Quebradas')
})

btnRoshar.addEventListener('click', () => {
    calcularProductos(cantidadRoshar, 3, mensajeRoshar, 'Mapa de Roshar')
})


function calcularProductos(cantidad, precio, mensaje, nombre){
    let numero = Number(cantidad.value);
    mensaje.innerHTML = ''

    if (numero <= 0){
        mensaje.innerHTML = 'Cantidad no válida'
        return
    } else if (numero > 10){
        mensaje.innerHTML = 'Límite de 10 unidades por persona'
        return
    }
    let subtotal = numero * precio;
    total = total + subtotal;
    totalProductos.innerHTML = total + " esferas";

    const productoExistente = listaCarrito.querySelector(`[data-producto="${nombre}"]`);

    if (productoExistente) {
        productoExistente.innerHTML = `${nombre} ${subtotal} esferas`;
    } else {
        const li = document.createElement("li");
        li.dataset.producto = nombre;
        li.innerHTML = `${nombre} ${subtotal} esferas`;

        listaCarrito.appendChild(li);
    }
}

