/*Producto de todos los elementos
Escribe una función que reciba un arreglo de números y use reduce() para calcular
el producto de todos los números. */

function calcularProducto(arreglo) {
    return arreglo.reduce((producto, numero) => producto * numero, 1);
}

let numeros = [1, 2, 3, 4, 5];
let resultado = calcularProducto(numeros);

console.log(resultado); 


/* el método reduce nos permite manipular un array para obtener un único valor como resultado. */