/*Comprobar si un arreglo está vacío
Escribe una función que verifique si un arreglo está vacío (sin usar length
directamente). */

function estaVacio(arreglo) {
    return !arreglo.some(() => true);
}

const arreglo1 = [];
const arreglo2 = [1, 2, 3];

console.log(estaVacio(arreglo1)); 
console.log(estaVacio(arreglo2)); 


/* El.map de JavaScript es una función que nos permite recorrer un array 
y que devuelve un nuevo array según una función que nosotros necesitemos. */