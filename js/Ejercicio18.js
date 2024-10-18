/*Algunos números son pares
Dado un arreglo de números, usa some() para verificar si al menos uno es par. */

let numeros = [1, 3, 5, 7, 8, 11];

let UnoEsPar = numeros.some(numero => numero % 2 === 0);

console.log(UnoEsPar); 


/*El método some () comprueba si al menos un elemento del array 
cumple con la condición implementada por la función proporcionada. */