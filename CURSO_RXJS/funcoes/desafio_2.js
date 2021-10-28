
const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 0, preco: 649.99, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.99, fragil: false },
    { nome: 'Lapis', qtde: 03, preco: 5.99, fragil: false },
    { nome: 'Tesoura', qtde: 01, preco: 19.99, fragil: true },
]

//1. fragil: true
//2. qtde * preco: 27.10 -> total
//3. media totais

const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}
const mediaInicial = { qtde: 0, total: 0, media: 0 }
const media = carrinho
    .filter(fragil)
    .map(getTotal)
    .reduce(getMedia, mediaInicial)
    .media

console.log(`A media é ${media} !`)
