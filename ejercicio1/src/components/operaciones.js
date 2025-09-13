/*Funcion que encuentra donde esta la incognita*/
export function dondeX(numeros){
    return numeros.findIndex(n => n.includes("x"));

}


/* Función que recibe tres numeros y halla la x que se encuentra en uno de ellos */
/*export function hallarX(num1, num2, num3) {
    
    let x;

    if (isNaN(n1) && !isNaN(n2) && !isNaN(n3)) {
        x = n3 - n2;
    } else if (!isNaN(n1) && isNaN(n2) && !isNaN(n3)) {
        x = n3 - n1;
    } else if (!isNaN(n1) && !isNaN(n2) && isNaN(n3)) {
        x = n1 + n2;
    } else {
       x = n1 + n2 === n3 ? "No hay incógnita" : "Datos incorrectos";
    }

    return x;
}
*/