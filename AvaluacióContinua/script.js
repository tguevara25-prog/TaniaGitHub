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

let cantidadMoldeador = document.getElementById('cantidadMoldeador')
const btnMoldeador = document.getElementById('btnMoldeador')
const mensajeMoldeador = document.getElementById('mensajeMoldeador')

let cantidadEspada = document.getElementById('cantidadEspada')
const btnEspada = document.getElementById('btnEspada')
const mensajeEspada = document.getElementById('mensajeEspada')

let cantidadArmadura = document.getElementById('cantidadArmadura')
const btnArmadura = document.getElementById('btnArmadura')
const mensajeArmadura = document.getElementById('mensajeArmadura')

const listaCarrito = document.getElementById('listaCarrito');
const totalProductos = document.getElementById("totalProductos");
const btnVaciar = document.getElementById("vaciarCarrito");
const botonComprar = document.getElementById("comprarCarrito");

let total = 0;
let carrito = {};

//BOTONES
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

btnMoldeador.addEventListener('click', () => {
    calcularProductos(cantidadMoldeador, 150, mensajeMoldeador, 'Moldeador de almas')
})

btnEspada.addEventListener('click', () => {
    calcularProductos(cantidadEspada, 300, mensajeEspada, 'Espada Esquirlada')
})

btnArmadura.addEventListener('click', () => {
    calcularProductos(cantidadArmadura, 300, mensajeArmadura, 'Armadura Esquirlada')
})

btnVaciar.addEventListener('click', vaciarCarrito);

botonComprar.addEventListener('click', comprarCarrito);

//TOAST
function crearToast(titulo, mensaje) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.role = 'alert';
    toast.ariaLive = 'assertive';
    toast.ariaAtomic = 'true';
    toast.innerHTML = `
        <div class='toast-header'>
            <strong class='me-auto'>${titulo}</strong>
            <button type='button' class='btn-close' data-bs-dismiss='toast'></button>
        </div>
        <div class='toast-body'>
            ${mensaje}
        </div>
    `;
    contenedorToasts.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast, {
        delay: 3000
    });
    bsToast.show();
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

//COMPRAR CARRITO
function comprarCarrito() {
    if (listaCarrito.children.length === 0) {
        crearToast('🛒 Carrito', 'El carrito está vacío.');
        return;
    }
    crearToast('⚔️ Compra realizada', `Tu total es de: ${total} esferas`);

    listaCarrito.innerHTML = '';
    carrito = {};
    total = 0;
    totalProductos.textContent = "0";
}

//VACIAR CARRITO
function vaciarCarrito(){
    listaCarrito.innerHTML = ''
    carrito = {};
    total = 0
    totalProductos.innerHTML = '0'
    crearToast('🛒 Carrito', 'El carrito se ha vaciado.');
}

//CALCULAR PRECIO
function calcularProductos(cantidad, precio, mensaje, nombre){
    let numero = Number(cantidad.value);
    mensaje.innerHTML = ''

    if (numero <= 0){
        crearToast(
        'Cantidad no válida',
        `Escoge una cantidad del 1 al 10`);
        return
    } else if (numero > 10){
        crearToast(
        'Límite alcanzado',
        `Escoge una cantidad del 1 al 10`);
        return
    }
    let subtotal = numero * precio;
    crearToast(
    '🏹 Producto añadido',
    `Se añadieron ${numero} unidad(es) de ${nombre}.`);
    carrito[nombre] = subtotal;
    total = 0; 
    
    //BUCLE
    for (let producto in carrito) {
        total += carrito[producto];
    }
    totalProductos.innerHTML = total + ' esferas';
    const productoExistente = listaCarrito.querySelector(`[data-producto='${nombre}']`);
    
    if (productoExistente) {
        productoExistente.innerHTML = `${nombre} ${subtotal} esferas`;
    } else {
        const li = document.createElement('li');
        li.dataset.producto = nombre;
        li.innerHTML = `${nombre} ${subtotal} esferas`;

        listaCarrito.appendChild(li);
    }
}

