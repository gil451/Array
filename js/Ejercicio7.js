/*Eliminar duplicados
Dado un arreglo de números, retorna un nuevo arreglo con los valores únicos (sin
duplicados). */

const Numeros = [1, 2, 2, 3, 4, 4, 5, 5, 10, 10, 12, 13, 13];
const Unicos = [...new Set(Numeros)];

console.log(Unicos); 

//set() = te almacena valores unicos en el codigo 