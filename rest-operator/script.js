// function convidados(nomes){
//     console.log("SEJA BEM VINDO A FESTA A TODOS OS CONVIDADOS")
//     nomes.forEach(nome => {
//         console.log(nome)
//     });
// }

// convidados(['Rafael', 'Jessica', 'Adriana', 'Vlademir'])

// Rest Operator

function sorteadorNumeros(...numeros){
    const numeroIndiceGerado = Math.floor(Math.random() * numeros.length)
    console.log(`O número gerado foi: ${numeros[numeroIndiceGerado]}`)
}

sorteadorNumeros(1, 2, 6, 8, 9, 4, 19, 90, 100, 12, 13, 14, 87873409, 213)


function apresentacao(nome, idade, ...hobies){
    console.log(`Olá ${nome}, que tem ${idade} anos. Seus hobies são: ${hobies}`)
}

apresentacao('Rafael', 12, "Programar", 'Tocar Violão', 'Jogar Jogos')