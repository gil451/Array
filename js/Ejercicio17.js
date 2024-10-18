/*Todos los números son mayores que "n"
Dado un arreglo de números y un número n, usa every() para verificar si todos los
números son mayores que n. */

const numeros = [10, 20, 30, 40, 50];
const n = 5;

const todosMayores = numeros.every(numero => numero > n);

console.log(todosMayores); 

/*Si se encuentra dicho elemento, every() 
devuelve inmediatamente false y deja de iterar por el arreglo. */