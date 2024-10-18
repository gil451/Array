/*Buscar el índice de un elemento
Escribe una función que reciba un arreglo y un valor, y retorne el índice del valor en
el arreglo (o -1 si no existe). */

function obtenerIndice(arreglo, valor) {
    return arreglo.indexOf(valor);
}

const numeros = [10, 20, 30, 40, 50];
const indice1 = obtenerIndice(numeros, 30);
const indice2 = obtenerIndice(numeros, 60);

console.log(indice1); 
console.log(indice2);

/*El método indexOf () devuelve el índice, dentro del objeto String 
que realiza la llamada, de la primera ocurrencia del valor especificado, */