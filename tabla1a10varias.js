// Tablas del 1 al 10 utilizando for
let i, j;

for (i=1;i<=10;i++) {
    console.log('Tabla del ' + i + ':')
    for (j=1;j<=10;j++) {
        console.log(i + ' x ' + j + ' = ' + i*j);
    }
}

// Tablas del 1 al 10 utilizando while

i=1
while(i<=10) {
    console.log('Tabla del ' + i + ':');
    j=1;
    while (j<=10) {
        console.log(i + ' x ' + j + ' = ' + i*j);
        j++; // incremento j
    }
    i++; // incremento i
}

// Tablas del 1 al 10 utilizando do..while

i=0;
do {
    i++;
    j=0;
    do {
        j++;
        console.log(i + ' x ' + j + ' = ' + i*j);
    } while (j<10);
} while (i<10);




