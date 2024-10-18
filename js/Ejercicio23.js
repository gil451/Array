/*Plana un arreglo anidado
Dado un arreglo que contiene arreglos anidados, usa flat() para aplanarlo en un solo
nivel. */

const arreglosAnidados = [[1, 2], [3, 4], [5, 6]];

const arregloAplanado = arreglosAnidados.flat();

console.log(arregloAplanado); 

/*El método flat () crea una nueva matriz con todos los elementos de sub-array 
concatenados recursivamente hasta la profundidad especificada. */
