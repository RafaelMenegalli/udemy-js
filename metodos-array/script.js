
// Usando o MAP()
// const array = ['Rafael', 'Jessica', 'Adriana', 'Vladimir']

// function mostrar(item, index){
//     console.log(`Este é o item: ${item} e este é o index ${index}`)
// }

// array.map(mostrar)


//Usando o REDUCE()

const lista = [1, 2, 3, 4, 5, 7, 8, 9, 10, 1]

const total = lista.reduce((acumulador, numeroAtual, index, arrayOriginal) => {
    console.log(`O acumulador é: ${acumulador} - O numero atual é: ${numeroAtual} - O index é: ${index} - O array original é: ${arrayOriginal}`)

    return acumulador += numeroAtual
})

console.log(`A soma de todos os números da lista é: ${total}`)