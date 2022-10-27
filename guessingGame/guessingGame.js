//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randowNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//EVENTOS
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', btnKeydown)

//função callback
function handleTryClick(event) {
    event.preventDefault() // <- Quer dizer "não faça o padrao" que seria atualizar a pag
    
    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value == "")) {
        toggleScreen()
        screen2.querySelector("h2").innerText = "Digite um número"
        randowNumber;
        inputNumber.value = ""
    }

    if(Number(inputNumber.value) < 0 || (Number(inputNumber.value) > 10)) {
        toggleScreen()
        screen2.querySelector("h2").innerText = "Só pode números entre 0 a 10"
        inputNumber.value = ""
    }

    if((Number(inputNumber.value) == randowNumber) && xAttempts == 1) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativa`
    } else if(Number(inputNumber.value) == randowNumber && xAttempts != 1) {
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }
    
    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randowNumber;
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function btnKeydown(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}