/* Funciones */
/* 
function nombreFuncion(argumentos...){ // undefined
    // codigo
}

var nombreFuncion = function(argumentos...){
    // codigo
}

var nombreFuncion = (argumentos...) => {
    // codigo
}

Hoisting

*/

console.log(nombre);

console.log(saludo("Luis", "Rodriguez"))
//console.log(imprimirNombreCompleto("Miguel", "Clemente"))

console.log(sumar(10, 20))


// Definiendo la funcion
function saludar() {
    console.log("Hola desde una funcion")
    return "Hola mundo desde una funcion";
}


// Ejecutar la funcion
let resultado = saludar()
console.log(resultado)


var saludar2 = function () {
    return "Hola desde saludar2";
}

// Ejecutando la funcion saludar2
saludar2()


/* const saludar3 = () => {
    return "Hola Mundo desde saludar3";
} */

const saludar3 = () => "Hola Mundo desde saludar3";

function sumar(a, b) {
    return a + b
}

let result = sumar(5, 10);
console.log("El resultado de la suma es: " + result);

const restar = function (a = 5, b) {
    return a - b;
}

restar(10, 6)


const imprimirNombreCompleto = (nombre = "John", apellido = "Doe") => `Hola, soy ${nombre} ${apellido}`;

console.log(imprimirNombreCompleto("Luis", "Rodriguez"))

var nombre = "Jane";
let nombre2 = "John";
let apellido = "Doe"

function saludo(nombre, apellido) {
    //let nombre = "Jane";
    return `Hola ${nombre} ${apellido}`;
}

console.log(nombre2);
console.log(saludo(nombre2, apellido))


function pruebaVariable(){
    return edad;
}

//const pruebaVariable = () => edad;
let edad = 28;

console.log(pruebaVariable())