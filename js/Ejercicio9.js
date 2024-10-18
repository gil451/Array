/*Filtrar números pares
Dado un arreglo de números, retorna solo los números pares usando filter(). */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 99, 120, 555];
const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares); // Salida: [2, 4, 6, 8, 10, 12, 14, 120]

/* El método filter () es una función de orden superior en JavaScript 
que toma una función como argumento y devuelve un nuevo array con todos 
los elementos del array original que cumplen la condición especificada en la función.*/