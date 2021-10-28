const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.99 },
    { nome: 'Caderno', qtde: 4, preco: 27.99 },
    { nome: 'Lapis', qtde: 03, preco: 5.99 },
    { nome: 'Tesoura', qtde: 01, preco: 19.99 },
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
    .map(getTotal)
    .reduce(somar)

console.log(totalGeral)

Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial
    for(let i = 0; i < this.length; i++) {
        if(!acc && i === 0){
            acc = this[i]
        } else {
        fn(acc, this[i], i, this)
        }
    }
    return acc
}
