/*La incognita x es uno de los tres números, y los otros pueden tener cualquier
cantidad de digitos, pero la incógnita no puede estar entre los digitos*/

import { hallarX } from './components/operaciones.js';
//Ingreso de numeros con un promp
let num1 = prompt("Ingresa el primer número (o 'x'):");
let num2 = prompt("Ingresa el segundo número (o 'x'):");
let num3 = prompt("Ingresa el tercer número (resultado):");
//Convierte los promp a numero
let numero1 = isNaN(parseInt(num1)) ? NaN : parseInt(num1);
let numero2 = isNaN(parseInt(num2)) ? NaN : parseInt(num2);
let numero3 = isNaN(parseInt(num3)) ? NaN : parseInt(num3);
//Llama la funcion
let resultado = hallarX(numero1, numero2, numero3);

alert("El valor de x es: " + resultado);