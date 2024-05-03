

function Calcular(event){
    event.preventDefault();

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resposta = document.getElementById('resposta');
    const imc = peso / (altura * altura);

    if(imc < 17){
        resposta.innerHTML = `<br>Seu IMC é: ${imc.toFixed(2)}, cuidado você está mutio abixo do peso!`
    } else if(imc < 18.50){
        resposta.innerHTML = `<br>Seu IMC é: ${imc.toFixed(2)}, você está abaixo do peso!`
    } else if(imc < 25){
        resposta.innerHTML = `<br>Seu IMC é: ${imc.toFixed(2)}, você está em seu peso normal!`
    } else if(imc < 999){
        resposta.innerHTML = `<br>Seu IMC é: ${imc.toFixed(2)}, cuidado você está acima do peso!`
    } else {
        resposta.innerHTML = 'Seu peso ou altura são inválidos'
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}