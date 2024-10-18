/*Contar ocurrencias de un valor
Dado un arreglo de valores, cuenta cuántas veces aparece un valor específico
usando reduce(). */

let valores = [1, 2, 3, 1, 4, 1, 5, 6];
let valorBuscado = 1;

const conteo = valores.reduce((acumulador, valor) => {
    return valor === valorBuscado ? acumulador + 1 : acumulador;
}, 0);

console.log(conteo); 


/* el método reduce nos permite manipular un array para obtener un único valor como resultado.*/