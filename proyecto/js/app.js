// Arreglos de datos
const ingresos = [
    new Ingreso('Salario', 20000),
    new Ingreso('Ventaauto', 50000)
];

const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];


// Declaracion de variables
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
};

// Formato 
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
};

// Cabecero
const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    //esta linea solo se requiere para testing 
    //console.log(presupuesto, porcentajeEgreso);

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