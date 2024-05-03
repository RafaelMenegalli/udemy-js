// function Acao(){
//     document.write('Executou o timeout')
// }

// setTimeout(Acao, 2000)
// setTimeout(() => {    
//     const teste = setInterval(() => {
//         document.write("Entrei o setInterval depois de 3 segundos e estou sendo executado... <br>")
//         clearInterval(teste)
//     }, 1000)
// }, 3000)

function test(){
    console.log("Estou sendo rodado!")
}

const teste = setInterval(test, 1000)

