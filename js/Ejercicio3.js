/*Promedio de números
Dado un arreglo de números, crea una función que calcule y retorne el promedio de
esos números. */

function calcularPromedio(numeros) {
    if (numeros.length === 0) return null;
    const suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length; 
}

const numeros = [8, 9, 7, 10, 9];
console.log(calcularPromedio(numeros)); 

