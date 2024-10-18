/*Buscar elemento
Escribe una función que reciba un arreglo y un valor, y retorne true si el valor existe
en el arreglo y false si no. */

function contieneValor(arreglo, valor) {
    return arreglo.includes(valor);
}

const numeros = [1, 2, 3, 4, 5];
const existe = contieneValor(numeros, 3);
const noExiste = contieneValor(numeros, 6);

console.log(existe); 
console.log(noExiste); 


// includes() para ver si una cadena se encuentra dentro de otra.