// const dadosEmpresa = {
//     nome: "Empresa do Rafael",
//     cnpj: "3123234324234",
//     endereco: "Rua do meu coração",
//     status: true,
//     nomeFantasia: "Rafa's euro solutions"
// }

// console.log(dadosEmpresa)
// console.log(dadosEmpresa.nome)
// console.log(dadosEmpresa.cnpj)
// console.log(dadosEmpresa.status)

// console.log('-------------Divisor-----------------')

// const {nome, cnpj, status} = dadosEmpresa

// console.log(nome)
// console.log(cnpj)
// console.log(status)


// const pessoa = {
//     nome: 'Rafael Menegalli',
//     idade: 18,
//     sexo: 'Masculino',
//     status: 'ATIVO'
// }

// const {nome: nomePessoa, idade: idadePessoa, sexo: rafaelLindo} = pessoa 

// console.log(nome)
// console.log(nomePessoa)

// console.log(idadePessoa)
// console.log(rafaelLindo)

//-----------------------------------Descontruindo Array----------------------------------------------
// let exampleArray = ['Rafael', 'Jessica', 'João', 'Jorge']

// let {1: jessica, 2: joao, 0: rafael} = exampleArray

// console.log(jessica)
// console.log(rafael)
// console.log(joao)

// const {1: nome1, 2:nome2, 0:nome0} = exampleArray

// console.log(exampleArray[1])
// console.log(exampleArray[0])
// console.log(exampleArray[2])

// console.log(nome1)
// console.log(nome0)
// console.log(nome2)

//-------------------Segunda forma de desconstrução de arary------------------------

const array = ['Maça', 'Banana', 'Uva', 'Maracujá']

// const fruta1 = array[0]
// const fruta2 = array[1]
// const fruta3 = array[2]
// const fruta4 = array[3]

const [fruta1, fruta2, fruta3, fruta4] = array



console.log(fruta1)
console.log(fruta2)
console.log(fruta3)
console.log(fruta4)


const {0: primeiraFruta, 3: ultimaFruta} = array

console.log(primeiraFruta)
console.log(ultimaFruta)

const [a1, a2, a3, a4] = array

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

