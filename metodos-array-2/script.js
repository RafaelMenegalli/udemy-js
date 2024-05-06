//Usando os métodos de array FIND e FILTER 

// const numeros = [1, 2, 3, 9, 9, 9]

// const resultNumeros = numeros.find((item) => {
//     return item === 5
// })

// console.log(resultNumeros)

// const nomes = ['Rafael', 'Jessica', 'Adriana', 'Vladimir', 'Rafael']

// const resultNomes = nomes.filter((item, index) => {
//     return item === 'Rafael'
// })

// console.log(resultNomes)

const lista01 = [1, 3, 5, 'Rafael', 'Jessica', 'Rafael']

const result = lista01.find(item => {
    return item === 1
})

console.log(`Valor do result: ${result}`)

// Usando o filter

const lista02 = [1, 4, 6, 10, 'Rafael', 22, 'Jessica', 'Rafael']

const result2 = lista02.filter(item => {
    return item === 'Rafael'
})

console.log(`Valor do result2 : ${result2}`)