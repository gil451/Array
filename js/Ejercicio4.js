/*Invertir un arreglo
Escribe una función que tome un arreglo y lo devuelva invertido (sin usar reverse()). */

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

for (let i = 0; i < n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
}

console.log(arr); 
