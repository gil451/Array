/*Palabras más largas que "n" letras
Escribe una función que, dado un arreglo de palabras y un número n, devuelva las
palabras que tengan más de nletras. */

function palabrasConMasDeNletras(arreglo, n) {
    return arreglo.filter(palabra => palabra.length > n);
}

const palabras = ["hola", "manzana", "cuándo", "Gilberto", "sol", "Omiscito", "Adriancito", "Alancito"];
const n = 4;
const resultado = palabrasConMasDeNletras(palabras, n);

console.log(resultado); 

/* El método filter () es una función de orden superior en JavaScript 
que toma una función como argumento y devuelve un nuevo array con todos 
los elementos del array original que cumplen la condición especificada en la función.*/