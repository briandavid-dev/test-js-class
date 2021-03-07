import { NOMBRE2 } from './config.js';

const getEdificios = cantidad => new Promise((resolve, reject) => {

    let edificios = [];

    setTimeout(() => {
        
        for(let n= 0; n < cantidad; n++) {
            edificios[n] = {nombre: `Edificio ${n+1} : ${NOMBRE2}`};
        }

        resolve(edificios);

    }, 3000);

})

export default getEdificios;