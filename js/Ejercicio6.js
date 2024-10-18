/*Concatenar arreglos
Escribe una función que tome dos arreglos y los combine en uno solo. */

function combinarArreglos(arreglo1, arreglo2) {
    return arreglo1.concat(arreglo2);
}

const arregloA = [1, 2, 3];
const arregloB = [4, 5, 6, 7, 8, 9];
const Combinado = combinarArreglos(arregloA, arregloB);

console.log(Combinado);

// concat () se usa para unir dos o más arrays.