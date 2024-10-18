/*Combinar objetos de dos arreglos
Dado dos arreglos de objetos, usa map() para combinar los objetos con el mismo
índice en un solo arreglo de objetos. */

const arreglo1 = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 30 }
];

const arreglo2 = [
    { ciudad: "Madrid" },
    { ciudad: "Barcelona" }
];

const combinados = arreglo1.map((objeto, index) => {
    return { ...objeto, ...arreglo2[index] };
});

console.log(combinados);


/*El.map de JavaScript es una función que nos permite recorrer un array y que devuelve 
un nuevo array según una función que nosotros necesitemos.  */