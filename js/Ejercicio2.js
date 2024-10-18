/*Encuentra el mayor número
Escribe una función que encuentre el número más grande en un arreglo de
números. */


function numero_mayor(numeros) {
    return Math.max(...numeros); 
}

const numeros = [3, 5, 7, 2, 8];
console.log(numero_mayor(numeros)); 