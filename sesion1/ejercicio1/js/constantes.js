//crear una variable WEB con un valor inicial
let web = "https://www.google.com";

// Crear una constante ip con un valor fijo
const ip = "192.168.1.100";

//mostrar resultados iniciales
console.log("valor inical de web:", web);
console.log("valor inicial de ip:", ip);

//avtualizar variable web
web = "https://www.facebook.com";
console.log("Nuevo valor de web:", web);

//intentar cambiar el valor de la constante iip
try {
    ip = "10.10.1.100"; //esto generará un error
} catch (error) {
    console.error("Error al intentar cambiar ip:", error.message);
}
/**TRY
 * sirve para ejecutar codigo que podría causar un error
 * CATCH
 * permite capturar ese error y manejarlo sin que el programa se detenga
 */


//mostrar mensaje en pantalla
document.write("<h2>Ejercicio 4 en ejecucion</h2>");
document.write("<p>Revisa la consola para observar el comportamiento de la variable y la constante</p>")
