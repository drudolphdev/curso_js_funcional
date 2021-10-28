// arrow function

const felizNatal = () => console.log('Feliz Natal')
felizNatal()

const saudacao = (nome) =>`Fala ${nome} !!!`
console.log(saudacao("Sofia"))

const somar = (...numeros) =>{
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar([1, 2, 3, 4, 5]))
console.log(somar([10, 20, 30, 40, 50]))
console.log(somar([100, 200, 300, 400, 500]))



const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(8))

//this
Array.prototype.log = function() {
    console.log(this)
}

Array.prototype.ultimo = function() {
    console.log(this[this.length -1])
}

const numeros = [1, 2, 3]
numeros.log()
numeros.ultimo()
