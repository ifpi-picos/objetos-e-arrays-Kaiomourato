/*Crie um array de objetos representando pessoas com nome e idade, 
e use find para encontrar a primeira pessoa com idade maior que 18.*/

let pessoas = [
    {nome: 'Kaio Mourato', idade: 18},
    {nome: 'Gleison Filho', idade: 15},
    {nome: 'Caio Casemiro', idade: 20},
    {nome: 'Widiney Veloso', idade: 18}
]

let maior18 = pessoas.find(pessoas => pessoas.idade > 18)

console.log(maior18)