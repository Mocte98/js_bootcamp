// LET se utiliza para declarar variables
let pais = "Mexico";
console.log(pais);

//DECLARACION DE
let continente = "America";
console.log(pais, continente);
/** aparentemente punto y coma no es necesario pero como este
 * lenguaje fue creado en 10 perros dias pues esta wea
 * está llena de bugs*/ 

//CONCATENACION DE VARIABLES
let antiguedad = 2019;
let pais_y_continente = pais + " " + continente;

alert(pais_y_continente);

//ACTUALIZACION DE VALORES
pais = "China";
continente = "Asia";

//ACTUALIZACION DE RESULTADOS
pais_y_continente = pais + " " + continente;
console.log(pais, continente);
alert(pais_y_continente);