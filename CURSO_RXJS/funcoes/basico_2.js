
function bomDia() {
    console.log('bomDia!!!!')
}

const boaTarde = function () {
    console.log('boaTarde!!!!!!!!')
}

// 1)passamos uma funcao como parametro a outra funcao
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//2) Retornar uma funcao a partir de uma outra funcao

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

console.log(potencia(3)(4))
