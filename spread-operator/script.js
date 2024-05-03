function newUser(userData){
    const fullUserData = {
        ...userData,
        cargo: "Programador FullStrack",
        status: 'Ativo',
        inicio: '21/12/2024'
    }

    return fullUserData
}

console.log(newUser({nome: 'Rafael', sobrenome: 'Menegalli', idade: 18}))




// // const lista1 = [1, 2, 3]
// // const lista2 = [4, 5, 6]
// // const lista3 = [...lista1, ...lista2, 7, 8, 9]

// // console.log(lista3)

// const dadosPessoais = {
//     cpf: '540.937.468-18',
//     telefone: '(19) 99628-2121',
//     edereço: 'Rua do amor sem fim'
// }

// const pessoa = {
//     nome: 'Rafael Menegalli',
//     idade: 18,
//     sexo: 'Masculino',
//     ...dadosPessoais
// }


// console.log(pessoa)
