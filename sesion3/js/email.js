
//Validacion
const validarEmail = function(email = "") {
    if (!email) {
        console.warn("No ingresaste un email");
        return;
    }
    if (typeof email !== "string") {
        console.error(`El valor de "${email}" ingresando NO es una cadena de texto`);
        return;
    }
}


const esValido = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);

if (esValido) {
    console.log(`El email "${email}" es valido `);
} else {
    console.warn(`El email "${email}" NO es valido`);
}

//validaciones
validarEmail();
validarEmail