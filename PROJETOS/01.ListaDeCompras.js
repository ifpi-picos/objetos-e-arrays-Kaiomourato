/* O programa deve oferecer as
seguintes funcionalidades:
>>>>>>>>>>>>• Adicionar um item: O usuário deve ser capaz de adicionar novos itens à
lista de compras;
>>>>>>>>>>>>• Remover um item: O usuário deve ser capaz de remover itens da lista de
compras;
• Pesquisar item: O programa deve permitir que os usuários verifiquem se
um determinado item já está na lista de compras.
• Ordenar a lista: O programa deve permitir que o usuário ordene a lista de
compras pelos nomes dos itens.
• Exibir lista: O programa deve permitir a exibição de todos os itens da lista.
• Limpar a lista: O programar deve permitir que o usuário remova todos os
itens da lista de compras de uma vez.
• Encerrar programa, utilize um laço de repetição para manter o programa
ativo exibindo o menu de opções até o usuário escolher encerrar o programa*/

let prompt = require ('prompt-sync')()

let listaDeCompras = ["LEITE","PÃO","QUEIJO","OVOS","FRUTAS","VEGETAIS","CARNE","ARROZ","FEIJÃO","MACARRÃO"]

function adicionarNovoItem(){
    let itemNovo = prompt('Adicione o novo item: ')
    listaDeCompras.push(itemNovo)
}
function retirarItem(){
    console.log(listaDeCompras)
    let indexDoRemovido = listaDeCompras.indexOf(prompt('Elemento a ser removido: '))
    if (indexDoRemovido !== -1){
        listaDeCompras.splice(indexDoRemovido,1)
    } else {
    console.log('Elemento a ser removido não encontrado')}
}
function pesquisarItem (){
    let indexPesquisa = listaDeCompras.indexOf(prompt('Pesquisar por: '))
    if (indexPesquisa !== -1){
        console.log('O elemento está na lista')
    } else{
        console.log('O elemento não está na lista')
        }
}

retirarItem()