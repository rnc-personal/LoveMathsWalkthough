document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === 'submit') {
                alert('clicked!')
            } else {
                let gameType = this.getAttribute('data-type')
                alert(`You Clicked ${gameType}`)
            }
        })
    }
})

/**
 * This is the main game function
 */
function runGame() {

    letnum1 = Math.floor(Math.random()*25) + 1 
    letnum2 = Math.floor(Math.random()*25) + 1 
    
}


function checkAnswer() {

}

function calculateCorrectAnswer() {
    
}

function incrementScore() {

}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {

}
function  displaySubtractQuestion() {
    
}

function  displayMultiplyQuestion() {

}

//Mine
function  displayDivisionQuestion() {

}