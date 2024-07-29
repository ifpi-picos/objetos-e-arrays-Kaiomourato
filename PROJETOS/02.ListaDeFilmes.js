let filmesParaAssistir = []
let filmesAssistidos = []

function maiusculo(str) {
    return str.toUpperCase()
}

function adicionar() {
    filmesParaAssistir.push({
        filme: maiusculo(prompt('Filme a ser adicionado: ')),
        ano: parseInt(prompt('Ano de lançamento do filme: '), 10)
    })
}

function ordenarAno() {
    filmesParaAssistir.sort((a, b) => a.ano - b.ano)
    console.log("Depois de ordenar por ano:", JSON.stringify(filmesParaAssistir, null, 2))
}

function ordenarFilme() {
    filmesParaAssistir.sort((a, b) => a.filme.localeCompare(b.filme))
    console.log("Depois de ordenar por título:", JSON.stringify(filmesParaAssistir, null, 2))
}

function verificarParaAssistir() {
    let tituloParaPesquisar = maiusculo(prompt('Pesquisar por: '))
    let filmeEncontrado = filmesParaAssistir.some(f => f.filme === tituloParaPesquisar)
    if (filmeEncontrado) {
        console.log('O filme está na lista para assistir')
    } else {
        console.log('O filme não está na lista para assistir')
    }
}

function exibirParaAssistir() {
    console.log(`Filmes para assistir: ${JSON.stringify(filmesParaAssistir, null, 2)}`)
}

function exibirAssistidos() {
    console.log(`Filmes assistidos: ${JSON.stringify(filmesAssistidos, null, 2)}`)
}

function marcarAssistido() {
    if (filmesParaAssistir.length > 0) {
        let filmeParaMarcar = filmesParaAssistir.shift()
        filmesAssistidos.push(filmeParaMarcar)
        console.log('Filme marcado como assistido:', filmeParaMarcar)
    } else {
        console.log('Não há filmes na lista para assistir')
    }
}

function removerParaAssistir() {
    let tituloParaRemover = maiusculo(prompt('Digite o título do filme que deseja remover: '))
    let indice = filmesParaAssistir.findIndex(f => f.filme === tituloParaRemover)
    if (indice !== -1) {
        let filmeRemovido = filmesParaAssistir.splice(indice, 1)
        console.log('Filme removido:', filmeRemovido[0])
    } else {
        console.log('Filme não encontrado na lista para assistir')
    }
}

while (true) {
    console.log(`||| LISTA DE FILMES |||
                 MENU:
                 0 - Encerrar o programa
                 1 - Adicionar filme para assistir
                 2 - Ordenar Filmes para assistir (por lançamento)
                 3 - Ordenar Filmes para assistir (por título)
                 4 - Pesquisar por filme
                 5 - Exibir filmes na lista
                 6 - Exibir filmes já assistidos
                 7 - Marcar filme como assistido
                 8 - Remover filme da lista
                 `)
    let menu = parseInt(prompt('Ir: '), 10)

    if (isNaN(menu)) {
        console.log('Entrada inválida. Por favor, insira um número.')
        continue
    }

    if (menu === 0) {
        console.log('Encerrando...')
        break
    } else {
        switch (menu) {
            case 1:
                adicionar()
                break
            case 2:
                ordenarAno()
                break
            case 3:
                ordenarFilme()
                break
            case 4:
                verificarParaAssistir()
                break
            case 5:
                exibirParaAssistir()
                break
            case 6:
                exibirAssistidos()
                break
            case 7:
                marcarAssistido()
                break
            case 8:
                removerParaAssistir()
                break
            default:
                console.log('Opção inválida. Tente novamente.')
                break
        }
    }
}

