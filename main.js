/* Tipos de Datos */
/* 
String
Number
Boolean 
Undefined

Object
    Array
    Object Literales
    Null

Functions
*/

/* Variables (var, let, const) */

var nombre = ""; // "", '', ``

let edad = 30;
let grado = -10;
let sueldo = 30.4;

let open = false;
let active = true;

let apellido; // undefined


let datos = [1, "string", false, [1, 2], { name: 'luis'}, false]

let persona = {
    nombre: 'John',
    apellido: 'Doe',
    edad: 10,
    single: false,
    hasChilds: true
}

let direccion = null;

var ciudad = "Paris";
var ciudad = "Santiago";

let pais = "Canada";
pais = "Venezuela";

const PI = 3.1416;
// PI = 10.4; // Error

const numbers = [1, 2, 3];

// numbers = [1, 2, 3, 4]; // error

numbers.push(10)

console.log(numbers)

const person = {
    name: '',
    lastname: ''
}

person.name = 'Luis'
person.lastname = 'Rodrigue'

console.log(person)
/*
person = {
    name: 'John',
    lastname: 'Doe'
} // error
*/

/* Condicionales */
/* 

if (condicion) {
    // codigo
}

if (condicion) {
    // codigo
} else {
    // codigo
}

if (condicion) {
    // codigo
} else if (condicion) {
    // codigo
} else if (condicion) {
    // codigo
} else {
    // codigo
}


*/

let a = 8;
let b = 10;
let c = 9;

/* Operadores de Comparacion */
/* 
=== 
==
!==
!=
>=
<=
>
<
*/

/* Operadores Logicos */
// and = &&, or = ||, not = !

if (!a > b) {
    console.log("el mayor es A")
}

if (a === b || a === c){
    console.log("A es igual B o C");
}

if ((a > b || a > c) &&  (b > d || b > e)){

}

if (a > b){
    console.log("A")
} else {
    console.log("B")
}

if( a > b && a > c){
    console.log("El mayor es A");
} else if (b > c){
    console.log("El mayor es B");
} else {
    console.log("El mayor es C")
}

/* Operador Ternario */
/* let variable = condicion ? true : false */

let mayor = a > b ? "A" : "B";