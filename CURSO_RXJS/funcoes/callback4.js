

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.99 },
    { nome: 'Caderno', qtde: 4, preco: 27.99 },
    { nome: 'Lapis', qtde: 03, preco: 5.99 },
    { nome: 'Tesoura', qtde: 01, preco: 19.99 },
]

const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0

const nomesItensValidos = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomesItensValidos)

Array.prototype.meuFilter = function(fn) {
    const novoArray = []

    for (let i = 0 ; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}

const nomesItensValidos2 = carrinho
    .meuFilter(qtdeMaiorQueZero)
    .map(getNome)

console.log(nomesItensValidos2)
