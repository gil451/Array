/*Agrupar por edades
Dado un arreglo de personas con edades, agrúpalas en diferentes grupos según la
década en la que se encuentren (20s, 30s, etc.) usando reduce(). */

const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 32 },
    { nombre: "Pedro", edad: 45 },
    { nombre: "María", edad: 29 },
    { nombre: "Luis", edad: 48 }
];

const agrupadas = personas.reduce((acumulador, persona) => {
    const decada = `${Math.floor(persona.edad / 10) * 10}s`;
    if (!acumulador[decada]) {
        acumulador[decada] = [];
    }
    acumulador[decada].push(persona);
    return acumulador;
}, {});

console.log(agrupadas);



/* el método reduce nos permite manipular un array para obtener un único valor como resultado.*/