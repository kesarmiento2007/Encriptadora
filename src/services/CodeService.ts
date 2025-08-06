import { teclas, clave } from '../data/constantes';

function residuoClave() : number {
    return (teclas.length - 1) % clave;  // Devuelve el residuo de la división entre el número de teclas y la clave (que es el modulo)
}

export function cifrarMensaje(mensaje: string) : string {

    let mensajeCifrado = [];

    for(let i = 0; i < mensaje.length; i++) {
        mensajeCifrado.push( teclas[ (teclas.indexOf(mensaje[i]) + residuoClave()) > teclas.length - 1 ? ((teclas.indexOf(mensaje[i]) + residuoClave()) - (teclas.length)) : (teclas.indexOf(mensaje[i]) + residuoClave()) ] );
    }

    return mensajeCifrado.join('');
}

export function decifrarMensaje(mensaje: string) : string {

    let mensajeDecifrado = [];

    for(let i = 0; i < mensaje.length; i++) {
        mensajeDecifrado.push( teclas[ (teclas.indexOf(mensaje[i]) - residuoClave()) < 0 ? ((teclas.indexOf(mensaje[i]) - residuoClave()) + (teclas.length)) : (teclas.indexOf(mensaje[i]) - residuoClave()) ] );
    }

    return mensajeDecifrado.join('');
}