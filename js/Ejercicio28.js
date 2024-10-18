/*Transforma un arreglo de objetos
Dado un arreglo de objetos con propiedades {nombre: string, edad: number}, usa
map() para crear un nuevo arreglo que solo contenga los nombres. */

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Pedro", edad: 35 }
];

const nombres = personas.map(persona => persona.nombre);

console.log(nombres); 


/*El.map de JavaScript es una función que nos permite recorrer un array y que devuelve 
un nuevo array según una función que nosotros necesitemos.  */