import getEdificios from './utils.js';
import cualquierCosa, { NOMBRE1 } from './config.js';
import './public/styles/globals.css';

import Tarea from './controllers/Tareas.js';   
import ComprasPendientes from './controllers/ComprasPendientes.js';



// creando el objeto
const tarea1 = new Tarea('David','Media');
const tarea2 = new Tarea(NOMBRE1,'Alta');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());


// compras
let compra1 = new ComprasPendientes('Jabon', 'Urgente', 4);

console.log(compra1.mostrar());


getEdificios(6).then( e => {
    console.log('e', e)
});

console.log('cualquierCosa', cualquierCosa)


document.querySelector("#app").innerHTML = `<div class="titulos_especiales">hola</div>`;