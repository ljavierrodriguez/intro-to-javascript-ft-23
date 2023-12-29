/* Loops, Bucles o Ciclos */
/* 

for (contador; condicion; incremento){
    // codigo
}

for (indice in coleccion){
    // codigo
}

for (valor of coleccion){
    // codigo
}

while (condicion){
    // codigo
}

do {
    // codigo
} while (condicion)

*/

/* Ejemplos Ciclo For */
//   contador    condicion  incremento
//      1           2          4
for (let num = 1; num <= 10; num++) {
    // codigo
    // 3
    console.log(num)
}

for (let num = 10; num >= 1; num--) {
    console.log(num)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nombres = ["Carlos E.", "Catalina", "Nicolas", "John", "Ignacio", "Mauricio"];
let estudiantes = [
    { name: 'Carlos E.' },
    { name: 'Catalina' },
    { name: 'Nicolas' },
    { name: 'John' },
    { name: 'Mauricio' },
    { name: 'Ignacio' },
]

let size = numeros.length;
for (let indice = 0; indice < size; indice++) {
    console.log(numeros[indice])
}


for (let indice in numeros) {
    console.log("pos:", indice)
    console.log("valor:", numeros[indice])
}


for (let num of numeros) {
    console.log(num);
}

for (let indice in nombres) {
    console.log("pos:", indice)
    console.log("valor:", nombres[indice])
}

for (let nombre of nombres) {
    console.log(nombre);
}

for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    console.log(estudiante.name)
    console.log(estudiante['name'])
    console.log(estudiantes[i].name)
}



let num = 1;
while (num <= 10) {
    console.log(num)
    num++;
}

let indice = 0;
while (indice < numeros.length) {
    console.log(numeros[indice])
    indice++
}

num = 1;
do {
    console.log(num);
    num++;
} while (num <= 10)


console.log("Sigo aqui")

let total = 0;

numeros.forEach(function(elem, index, arreglo){ // valor, indice, arreglo
    console.log("Consegui un elemento"); // 1, 0, [1,2,3,4,5,6,7,8,9,10]
    console.log("valor: ", elem)
    console.log("indice: ", index)
    console.log("arreglo: ", arreglo)
})

function totalizar(numero){
    total += numero;
}

numeros.forEach(totalizar);

console.log(total)

total = 0;
for(let i = 0; i < numeros.length; i++){
    total += numeros[i]
}

console.log(total)