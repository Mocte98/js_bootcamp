const factorial = function (numero) {

    //Validacion 1: undefined
    if (numero === undefined) {
        console.warn("no ingresaste un numero");
        return;
    }
    // Validacion 2: no es numero
    if (typeof numero !== "number") {
        console.error(`El valor de "${numero}" ingresado NO es un numero`);
        return;
    }

    if (numero === 0) {
        console.error("El numero no puede ser 0");
        return;
    }
    if (Math.sign(numero) === -1) {
        console.error("El numero no puede ser negativo");
        return;
    }
    // Declarar variable para calculo de factorial
    let resultadoFactorial = 1;
    // Ciclo para calcular factorial
    for (let i = numero; i > 1; i--) {
        resultadoFactorial *= i;
    }
    // Mostrar resultado en consola
    console.log(`El factorial del numero ${numero} es ${resultadoFactorial}`);

}

// Pruebas
factorial(0);       // error: no puede ser 0
factorial("5");     // error: no es número
factorial(1, 2, 3); // solo toma el primer argumento (1)
factorial(undefined); // warning: no ingresaste un número
factorial(-5);      // error: no puede ser negativo
factorial(5);       // resultado: 120
factorial(8);       // resultado: 40320