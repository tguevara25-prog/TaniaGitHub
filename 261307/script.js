function fecha(){
  console.log(new Date())
}

fecha()

function saludar(nombre){
  console.log(`Hola ${nombre}`)
}

saludar('Javier')

function sumaInutil(){
  let a = 2
  let b = 6
  console.log(a+b)
  document.write('Esta función escribe un '+ (a+b) + '<br>')
}

sumaInutil()

function suma(a,b){
  console.log('Esta suma da '+(a+b))
}

suma(4,8)

function sumaTop(c,d){
  return c+d
}

let salida = sumaTop(20,7)
document.write(salida + '<br>')

function calcularEdad(anioNacimiento){
  const anioActual = new
Date().getFullYear();
  if(anioNacimiento > anioActual){
    return "Año no válido";
  }
  return anioActual - anioNacimiento;
}

let edad = calcularEdad(2007)
document.write(edad)

let aa = Date.now()
console.log(aa)