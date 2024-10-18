/*Ordenar números
Dado un arreglo de números, ordénalo de menor a mayor. */

const numeros = [5, 2, 9, 1, -5, 6];
numeros.sort((a, b) => a - b);

console.log(numeros); 

/* El método sort() puede ordenar valores negativos, cero y positivos 
en el orden correcto ya sea tipo texto o númerico.*/