const carros =[
    {nome: 'Celta', Ano: 2001},
    {nome: 'Corolla', Ano: 2018}
]
const carrosNovos = carros.filter(carro => carro.Ano > 2010)

console.log(carrosNovos)