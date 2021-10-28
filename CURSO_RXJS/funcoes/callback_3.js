
const nums = [ 1, 2, 3, 4, 5 ]
const dobro = n => n * 2 
console.log(nums.map(dobro))

const num = [ 1, 2, 3, 4, 5 ]
const dobro2 = (n, i) => n * 2 + i
console.log(num.map(dobro2))

const numeros = [ 1, 2, 3, 4, 5 ]
const dobro3 = (n, i, a) => n * 2 + i + a.length
console.log
console.log(numeros.map(dobro3))

const nomes = [ 'Sofia', 'Sheila', 'Diego', 'Nina' ]
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)


const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.99 },
    { nome: 'Caderno', qtde: 4, preco: 27.99 },
    { nome: 'Lapis', qtde: 03, preco: 5.99 },
    { nome: 'Tesoura', qtde: 01, preco: 19.99 },
]

/* const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais) */


Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i< this.length; i ++) {
        novoArray.push(fn(this[i], i, this))
    }
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)
console.log(totais)
