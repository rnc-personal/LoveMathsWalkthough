document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit') {
                checkAnswer()
            } else {
                let gameType = this.getAttribute('data-type')
                runGame(gameType)
            }
        })
    }
    runGame('addition')
})

/**
 * This is the main game function
 */
function runGame(gameType) {

    let num1 = Math.floor(Math.random() * 25) + 1 
    let num2 = Math.floor(Math.random() * 25) + 1 
    
    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`No game selected: ${gameType}`)
        throw `No game selected: ${gameType}. Ending now!`
    }
}

/**
 * Checks i fthe answer from the user matches the calculated value 
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value)
    let calculatedAnswer = calculateCorrectAnswer()
    let isCorrect = userAnswer === calculatedAnswer[0]

    if (isCorrect) {
        alert(`Your answer: ${userAnswer} is correct! :)`)
    } else {
        alert(`Your answer: ${userAnswer} is wrong! :( - The correct answer wass ${calculatedAnswer[0]}`)
    }

    runGame(calculatedAnswer[1])
}

/**
 * Checks if the answer is correct
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText)
    let operand2 = parseInt(document.getElementById('operand2').innerText)
    let operator = document.getElementById('operator').innerText

    if (operator === "+") {
        return [operand1 + operand2, 'addition']
    } else {
        alert(`Unimplemeted operator ${operator}`)
        throw `Unimplemeted operator ${operator}. Game ending`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1
    document.getElementById('operand2').textContent = operand2

    document.getElementById('operator').textContent = "+"
}

function  displaySubtractQuestion() {
    
}

function  displayMultiplyQuestion() {

}

//Mine
function  displayDivisionQuestion() {

}