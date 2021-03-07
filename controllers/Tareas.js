class Tareas {
    constructor(nombre= 'Juana la cubana', prioridad = 'baja') {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar() {
        return `${this.nombre} tiene prioridad ${this.prioridad}`;
    }
}

export default Tareas;