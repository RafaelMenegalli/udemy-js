
//Switch
function Pedir(){
    const selectedItem = prompt("Item Escolhido")

    switch(Number(selectedItem)){
        case 1:
            alert("Você escolheu o tem 1 = Arroz com Feijão")
            break;
        case 2:
            alert("Você escolheu o item 2 = Passa-tempo")
            break;
        case 3:
            alert("Você escolheu o item 3 = Uvas Passas")
            break;
        case 4:
            alert("Você chamou o garçom")
            break;
        default:
            alert("Por Favor, escolha um número entre 1 e  4!")
            break;
    }
}


//Laço de repetição FOR
// const repetionNumber = 30

// for(let i = 0; i <= repetionNumber; i++){
//     document.write("O número da repetição é: " + i + "<br>")
// }


//Laço de repetição while
// let counter = 0

// while(counter <= 10){
//     document.write(`O valor do contador é: ${counter} <br>`)

//     counter++
// }



//----------------------------------------------------------------------------------------------

// const titlePage = document.getElementById("titlePage")

// function Entrar(){

//     const nome = prompt("Entrei com seu nome")

//     if(nome === '' || nome === null || nome === undefined){
//         alert("Ops...Algo deu errado")
//         titlePage.innerHTML = "Preecha as informações corretament para acessar!"
//     } else {
//         titlePage.innerHTML = "Bem Vindo! " + nome + " "
//         const existButton = document.createElement("button")
//         existButton.innerText = "Sair do Site"
//         existButton.onclick = Sair

//         titlePage.appendChild(existButton)


//     }
// }

// function Sair(){
//     alert("Até Mais!")
//     titlePage.innerHTML = "Você Saiu"
// }


// function studentMedia(n1, n2){
//     const media = (n1 + n2) / 2

//     if(media >= 7){
//         console.log("O aluno foi aprovado com a média: " + media)
//     } else if(media < 7){
//         console.log("O aluno foi reprovado com a média: " + media)
//     }
// }

// function student(name, course){
//     const message = "Seja bem vindo " + name + " ao curso de " + course
    
//     console.log(message)
// }