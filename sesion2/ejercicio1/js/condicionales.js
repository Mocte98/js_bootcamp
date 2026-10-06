//Ejercicio 1
var numero1 = parseInt(prompt("Introduce el primer número", 0));
var numero2 = parseInt(prompt("Introduce el segundo número", 0));

while (
    isNaN(numero1) || isNaN(numero2) || numero1 <= 0 || numero2 <=0
) {
    alert("Por favor introduce solo números válidos y mayores que 0.");
    numero1 = parseInt(prompt("Introduce el primer número", 0));
    numero2 = parseInt(prompt("introduce el segundo número", 0));
}

// imprimir valores en consola
console.log("Número 1:", numero1);
console.log("Número 2:", numero2);

// comparaciones
if (numero1 === numero2) {
    alert("los números son iguales");
} 
else if (numero1 > numero2) {
    alert("EL NÚMERO MAYOR ES " + numero1)
    alert("EL NÚMERO MENOR ES " + numero2)
} 
else {
    ("INTRODUCE NÚMEROS CORRECTOS");
}
