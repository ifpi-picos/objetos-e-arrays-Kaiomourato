let prompt = require ('prompt-sync')()

let frase = prompt('Digite uma frase: ')
frase = frase.toUpperCase()

console.log(`Frase em MAIUSCULO: ${frase}`)