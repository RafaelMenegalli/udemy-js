function somar(a, b){
    const total = a + b
    return console.log(`O total é ${total}`)
}

// somar(4, 2)

const subtrair = (n1, n2) => {
    const total = n1 - n2
    return console.log(`O total é ${total}`)
}

// subtrair(100, 34)

const lista = [1, 5, 7, 9, 0, 10, 90, 89, 78, 67,0]

// lista.map( (item) => {
//     console.log(`O valor do item atual é ${item}`)
// } )

function pegarItem(item){
    console.log(`Item: ${item}`)
}

lista.map(pegarItem)

//Arrou function ou função anônima = () => {}