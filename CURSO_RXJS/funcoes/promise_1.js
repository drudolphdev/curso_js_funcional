
primeiroElemento = string => string[0]
primeiraLetra = string => string[0]
letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(["Sofia", "Sheila", "Diego", "Nina"])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)




