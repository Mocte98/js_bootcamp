// Ejercicio 2

//declaracion de variables
var suma = 0;
var contador = 0;
var numero = 0;

//ciclo 
while (true) {
    numero = parseInt(prompt("Introduce números hasta que uno sea negativo:", 0));
    if (isNaN(numero)){
    numero = 0;
    }
    suma += numero;
    contador ++;
    //Verificar si el número es negativo -> romper el bucle
    if (numero < 0){
        break;
    }
}

console.log("Suma actual:", suma, "Contador:", contador);

alert("La suma de todos los números es: " + suma +
    "\nLa media de todos los números es: " + (suma / contador));
