
import { dondeX } from './components/operaciones.js';
//import { hallarX } from './components/operaciones.js';
//Ingreso de numeros con un promp
let num1 = prompt("Ingresa el primer número (o 'x'):");
let num2 = prompt("Ingresa el segundo número (o 'x'):");
let num3 = prompt("Ingresa el tercer número (resultado):");
// Se crea un arreglo con los numeros
let numeros = [num1, num2, num3]
//Llama la funcion
let resultado = dondeX(numeros);

alert("El valor de x es: " + resultado);