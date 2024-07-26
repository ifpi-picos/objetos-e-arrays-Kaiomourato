const prompt = require('prompt-sync')();

function imprimirPrimeiroUltimoNome(nomeCompleto) {
    let nomes = nomeCompleto.split(' ');

    let primeiroNome = nomes[0];
    let ultimoNome = nomes[nomes.length - 1];
    
    console.log("Primeiro nome:", primeiroNome);
    console.log("Último nome:", ultimoNome);
}

let nomeCompleto = prompt('Digite seu nome completo: ');
imprimirPrimeiroUltimoNome(nomeCompleto);