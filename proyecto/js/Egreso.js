class Egreso extends Dato {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);                 // primero esto
        this._id = ++Egreso.contadorEgresos;       // después esto
    }

    get id() {
        return this._id;
    }
}

let e1 = new Egreso("Renta departamento", 900);
let e2 = new Egreso("Ropa", 400);
/* Lineas para testing
console.log(e1.id);
console.log(e2.id);
console.log(e1.descripcion); // Renta departamento
console.log(e2.valor); // 400
*/