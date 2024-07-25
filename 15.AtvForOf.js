let filmes = []
const prompt = require('prompt-sync')()

for(let i=0; i<5; i++){
    filmes.push(prompt('Adicione o nome de um filme: '))
}
for(const array of filmes){
    console.log(array)
}