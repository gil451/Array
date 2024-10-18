/*Multiplicar por 2
Crea una función que multiplique cada número de un arreglo por 2 usando map(). */

function multiplicarPorDos(arreglo) {
    return arreglo.map(numero => numero * 2);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosMultiplicados = multiplicarPorDos(numeros);

console.log(numerosMultiplicados); 

//recorrer un array y que devuelve un nuevo array según una función que nosotros necesitemos.