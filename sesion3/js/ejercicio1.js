//function to count the amount of characters in a string

function contarCaracteres (cadena = "") {
    if (!cadena) {
        console.warn("No ingresaste ninguna cadena");
    } else {
        console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`)
        
    }
} 
    //testing calls
contarCaracteres("");
contarCaracteres("Parangaricutirimicuaro");
contarCaracteres("Esternocleidomastoideo");


//OPERADOR TERNARIO EJEMPLO
const contarCaracteresArrow = (cadena = "") =>
    !cadena ? console.warn("No ingresaste ninguna cadena")
    : console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`)

contarCaracteresArrow("");
contarCaracteresArrow("Parangaricutirimicuaro");
contarCaracteresArrow("Esternocleidomastoideo");