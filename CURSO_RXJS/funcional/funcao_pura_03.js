// Uma Funcao Pura é uma Funcao em que 
// o valor de retorno é determinado APENAS
// por seus valores de entrada, sem efeitos
// colaterais observaveis

let qtdeDeExecucoes = 0

// Pura!
function somar(a, b){
    qtdeDeExecucoes++  //efeitos colaterais observaveis
    return a + b 
}

console.log(qtdeDeExecucoes)
console.log(somar(5, 7))
console.log(somar(5, 7))
console.log(somar(5, 7))
console.log(qtdeDeExecucoes)

