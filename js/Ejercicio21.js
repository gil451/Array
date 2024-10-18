/*Crear un arreglo a partir de un string
Escribe una función que reciba una cadena de texto y la convierta en un arreglo de
palabras. */

function convertirCadenaAPalabras(cadena) {
    return cadena.split(' ');
}

const texto = "Hola mundo, esto es un ejemplo.";
const arregloDePalabras = convertirCadenaAPalabras(texto);

console.log(arregloDePalabras); 

/*El método split en JavaScript es empleado para dividir una cadena, 
lo que nos entregará como resultado un arreglo que no afecta la cadena original. */