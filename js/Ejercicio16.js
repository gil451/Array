/*Encontrar un elemento específico
Dado un arreglo de objetos, encuentra el primer objeto que tenga una propiedad
específica usando find(). */

const objetos = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 35 },
    { nombre: "María", edad: 28 }
];

const propiedadBuscada = "edad";
const valorBuscado = 30;

const objetoEncontrado = objetos.find(objeto => objeto[propiedadBuscada] === valorBuscado);

console.log(objetoEncontrado); 

// find en JavaScript Este método nos permite encontrar el primer elemento dentro del array 
//original que cumpla con las condiciones de una función.
