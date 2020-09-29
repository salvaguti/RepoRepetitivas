
let readlnSync = require('readline-sync');

let salir = false; 
let respuesta;
do {
    respuesta = readlnSync.question('Deseas continuar (S/N)?: ');
    if (respuesta == 'N' || respuesta == 'n')
        salir = true; 
} while (salir == false);


