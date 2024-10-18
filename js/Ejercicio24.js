/*Dado un arreglo de números, usa map() para reemplazar cada número negativo con
su valor absoluto. */

const numeros = [-1, 2, -3, 4, -5, 6];

const numerosAbsolutos = numeros.map(numero => Math.abs(numero));

console.log(numerosAbsolutos); 


/*El.map de JavaScript es una función que nos permite recorrer un array y que devuelve 
un nuevo array según una función que nosotros necesitemos.  */
