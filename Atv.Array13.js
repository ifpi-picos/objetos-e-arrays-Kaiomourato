let filmes = []
const prompt = require('prompt-sync')()

for(let i=0; i<5; i++){
    filmes.push(prompt('Adicione o nome de um filme: '))
}

console.log(`Os filmes são: ${filmes}`)