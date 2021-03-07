import Tarea from './Tareas.js';

export default class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    mostrar() {
        super.mostrar();
        return `${super.mostrar()} y la cantidad es de ${this.cantidad}`;

    } 

}