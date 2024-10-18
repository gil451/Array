/*Suma acumulada
Dado un arreglo de números, usa reduce() para retornar la suma acumulada de los
elementos. */

let numeros = [1, 2, 3, 4, 5];

let sumaAcumulada = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumaAcumulada); 


/* el método reduce nos permite manipular un array para obtener un único valor como resultado.*/