// Programa que muestre del 1 al 10. 
// Realicemos tres versiones (con FOR, WHILE, DO..WHILE)

let contador;

// Con for
for (contador=1; contador<=10; contador++) {
    console.log('Valor de contador:' + contador);
}

// con while
contador = 1;
while (contador<=10) {
    console.log('Valor de contador:' + contador);
    contador++; // igual que contador = contador + 1
}

// con do..while
contador = 1;
do {
    console.log('Valor de contador:' + contador);
    contador++; // igual que contador = contador + 1
} while (contador<=10);





