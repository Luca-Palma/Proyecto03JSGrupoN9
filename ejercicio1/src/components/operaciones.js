/* Sirve pero solo con una incognita que no este entre los numeros
Funcion con solo un digito en el numero */
export function hallarX(n1, n2, n3) {
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