/*Eliminar falsy values
Dado un arreglo que contiene valores truthy y falsy, elimina todos los valores falsy
usando filter(). */

const valores = [0, 1, '', null, undefined, 'Hola', false, 42, NaN];

const valoresVerdaderos = valores.filter(valor => Boolean(valor));

console.log(valoresVerdaderos); 

/*El método filter () de JavaScript es una potente opción para filtrar colecciones de datos. */