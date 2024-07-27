let listaDeCompras = []

function maiusculo(a) {
    if (typeof a === 'string') {
        return a.toUpperCase()
    } else if (Array.isArray(a)) {
        return a.map(item => maiusculo(item))
    } else {
        return a
    }
}

function adicionarNovoItem() {
    console.log('* Evite o uso de acentos')
    let itemNovo = prompt('Adicione o novo item: ')
    listaDeCompras.push(maiusculo(itemNovo))
    console.log(`Lista atualizada: ${listaDeCompras}`)
}
function retirarItem() {
    console.log(`Analise qual elemento deve ser removido:
                 ${listaDeCompras}`)
    console.log('* Evite o uso de acentos')
    let itemParaRemover = maiusculo(prompt('Remover: '))
    let indexDoRemovido = listaDeCompras.indexOf(itemParaRemover)
    if (indexDoRemovido !== -1) {
        listaDeCompras.splice(indexDoRemovido, 1)
        console.log(`Lista atualizada: ${listaDeCompras}`)
    } else {
        console.log('Elemento a ser removido não encontrado')
    }
}
function pesquisarItem() {
    console.log('* Evite o uso de acentos')
    let itemPesquisado = prompt('Pesquisar por: ')
    if (itemPesquisado) {
        let itemPesquisadoMSA = maiusculo(itemPesquisado)
        let listaDeComprasMSA = listaDeCompras.map(item => maiusculo(item))
        if (listaDeComprasMSA.includes(itemPesquisadoMSA)) {
            console.log('O item está na Lista')
        } else {
            console.log('O item não está na Lista')
        }
    }
}
function ordenarLista() {
    listaDeCompras.sort((a, b) => maiusculo(a).localeCompare(maiusculo(b)))
    listaDeCompras.forEach(item => {
        console.log(item)
    });
}
function exibirLista() {
    listaDeCompras.forEach(item => {
        console.log(item)
    })
}
function limpaLista() {
    listaDeCompras.length = 0
    console.log(listaDeCompras)
}

while(true){
    console.log(` 
        ||| LISTA DE COMPRAS |||
          MENU:
              1 - Adicionar novo item à lista
              2 - Retirar Item da Lista
              3 - Pesquisar Item 
              4 - Exibir Lista 
              5 - Ordenar Lista
              6 - ENCERRAR`)
      let menu = parseInt(prompt(`
          Ir: `))
if (menu == 6){
    console.log(`
        ENCERRANDO...
        `)
    break
}
switch (menu){
    case 1:
        adicionarNovoItem()
        break
    case 2:
        retirarItem()
        break
    case 3:
        pesquisarItem()
        break
    case 4:
        exibirLista()
        break
    case 5:
        ordenarLista()
        break
    default:
        console.log('Operação Inválida!')
        break
}
}
    