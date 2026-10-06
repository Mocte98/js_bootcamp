// Declaracion de variables
const totalIngresos = () => 3700;
const totalEgresos = () => 1300;

//funcion formato Moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
};

//funcion formato Porcentaje
const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
};

// Funcion Cabecero
const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(presupuesto, porcentajeEgreso);

    /**resultados anteriores sin formato de $ y % 
    console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(totalIngresos());
    console.log(totalEgresos());
    */
    // Resultados con formato
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));

};

//Ejecutar funcion Cabecero
cargarCabecero();