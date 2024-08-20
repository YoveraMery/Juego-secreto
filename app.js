let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarTextoElement(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElement('p', `¡Felicidades! Adivinaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        intentos++;  // Aumentar el contador de intentos
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElement('p', 'El número es menor');
        } else {
            asignarTextoElement('p', 'El número es mayor');
        }
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById('numeroUsuario').value = ''; 
}

function generarNumeroSecreto() {
    if(listaNumeros.length >= numeroMaximo){
        asignarTextoElement('p', 'Ya se sortearon todos los números posibles');
        document.getElementById('numeroUsuario').disabled = true;  // Deshabilitar entrada si no quedan números
        return;
    }

    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while(listaNumeros.includes(numeroGenerado));
    
    listaNumeros.push(numeroGenerado);
    numeroSecreto = numeroGenerado;
    console.log(`Número secreto generado: ${numeroSecreto}`);
    console.log(`Números ya generados: ${listaNumeros}`);
}

function mensajes() {
    asignarTextoElement('h1', '¡Adivina el número!');
    asignarTextoElement('p', 'Ingresa un número del 1 al 10');
    generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    listaNumeros = [];  // Reiniciar la lista de números generados
    document.getElementById('numeroUsuario').disabled = false;  // Habilitar entrada de nuevo
    mensajes();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

mensajes();
