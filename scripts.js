
const result = document.querySelector(`.result`)
const humanScore = document.querySelector(`#human-score`)
const machineScore = document.querySelector(`#machine-score`)
const machineChoiceElement = document.querySelector(`#machine-choice`)

const winSound = new Audio('sounds/win.mp3')
const loseSound = new Audio('sounds/lose.mp3')
const drawSound = new Audio('sounds/draw.mp3')

const restartGame = () => {
    humanScoreNumber = 0;
    machineScoreNumber = 0;
    humanScore.innerHTML = 0;
    machineScore.innerHTML = 0;
    result.innerHTML = "";
    machineChoiceElement.innerHTML = "";
}

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTION = {
    PEDRA: `pedra`,
    PAPEL: `papel`,
    TESOURA: `tesoura`
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choices = [GAME_OPTION.PEDRA,GAME_OPTION.PAPEL, GAME_OPTION.TESOURA]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log(`Human: ` + human + ` Maquina: ` + machine)

 machineChoiceElement.innerHTML = machine;

    if (human === machine) {
        result.innerHTML = `Empate!`
        drawSound.play();
    }

    else if ((human === GAME_OPTION.PEDRA && machine === GAME_OPTION.TESOURA) ||
        (human === GAME_OPTION.PAPEL && machine === GAME_OPTION.PEDRA) ||
        (human === GAME_OPTION.TESOURA && machine === GAME_OPTION.PAPEL))
         {
            humanScoreNumber++
            humanScore.innerHTML = humanScoreNumber
        result.innerHTML = `Você ganhou!`
         winSound.play()
    }

    else  {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    result.innerHTML = `Você perdeu!`
     loseSound.play()
}
}