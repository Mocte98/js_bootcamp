class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    
    get valor() {
        return this._valor;
    }

    set valor(valor) {
        this._valor = valor;
    }
}

class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }

    get id() {
        return this._id;
    }
}

let i1 = new Ingreso("Salario", 2200);
let i2 = new Ingreso("Venta coche", 1500);
/** Lineas para testing 
console.log(i1.id);
console.log(i2.id);
console.log(i1.descripcion); // salario heredado de Dato
console.log(i2.valor); // 1500 heredado de Dato
*/