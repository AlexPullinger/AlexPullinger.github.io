let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
    return Math.floor(Math.random()*9)
}

const compareGuesses = (humanGuess, computerGuess, target) => {
    if(humanGuess < 0 || humanGuess > 9) {window.alert('Number Needs To Be Between 0 and 9')};
    end;
    let humanResult = target - humanGuess;
    let computerResult = target - computerGuess;
    if(Math.abs(humanResult) <= Math.abs(computerResult)){return true} else{return false}
}

const updateScore = (winner) => {
    if(winner === 'human') {humanScore = humanScore + 1} else {computerScore = computerScore + 1}
}

const advanceRound = () => {
    currentRoundNumber = currentRoundNumber + 1
}
