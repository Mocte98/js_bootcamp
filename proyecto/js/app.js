const totalIngresos = () => 3700;
const totalEgresos = () => 1300;

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(presupuesto, porcentajeEgreso);

    console.log(presupuesto);
    console.log(porcentajeEgreso);
    console.log(totalIngresos());
    console.log(totalEgresos());
};

cargarCabecero();

/** 
let egresos = {
    Renta: 900, 
    Ropa: 400
};

let ingresos = {
    Quincena: 9000, 
    Venta: 400
};
*/
