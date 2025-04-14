console.log("Hello World!")
/*--PSEUDOCODE--

1. Generate a random computer choice between Rock, Paper and Scissors.
2. Get human input
3. Compare human input to computerChoice.
4. Rock beats Scissors, Paper beats Rock, Scissors beats paper
5. Log the result to console
 */
function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    //console.log(randomNumber);
    if(randomNumber <= 0.33) {
        computerChoice = "rock";
    }
    else if(randomNumber >0.33 && randomNumber <= 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    console.log(computerChoice);
    return computerChoice;

}
// function gethumanChoice() {
    // let humanChoice = prompt("Lets play Rock, Paper, Scissors! \nEnter your choice!");
    // console.log(humanChoice);
    // return humanChoice
// }

//console.log(getComputerChoice())
//gethumanChoice();


//Variables to keep score
let humanScore = 0;
let computerScore = 0;

//function to play a single round
function playRound(humanArg, computerArg) {

    humanArg = humanArg.toLowerCase();
    let message = "";

    if(humanArg === "rock" && computerArg === "paper") {
        message = "Rock loses to Paper! You Lose!!";

        computerScore +=1;
        //Rock & Paper
    }
    else if(humanArg === "paper" && computerArg === "rock") {
        message = "Paper beats Rock! You Win!!";
        humanScore +=1;
        //Rock & Paper
    }
    else if(humanArg === "paper" && computerArg === "scissors") {
        message = "Paper loses to Scissors! You Lose!!";
        computerScore +=1;
        //Paper & Scissors
    }
    else if(humanArg === "scissors" && computerArg === "paper") {
        message = "Scissors beats Paper! You Win!!";
        humanScore +=1;
        //Paper & Scissors
    }
    else if(humanArg === "scissors" && computerArg === "rock") {
        message = "Rock beats Scissors! You Lose!!";
        computerScore +=1;
        //Rock and Scissors
    }
    else if(humanArg === "rock" && computerArg === "scissors") {
        message = "Rock beats Scissors! You Win!!";
        humanScore +=1;
        //Rock and Scissors
    }
    else if(humanArg === computerArg) {
        message = "Its a tie!";
    }
    else {
        message = "Wrong Input! Refresh to try again!";
    }

    return message;
}

function updateUI(humanChoice){
    if (humanScore >= 5 || computerScore >= 5)
        return;

    const compChoice = getComputerChoice();
    const result = playRound(humanChoice, compChoice);

    computerChoiceText.textContent = `Computer Chose: ${compChoice}`;
    resultText.textContent = result;
    scoreText.textContent = `Your Score : ${humanScore}|| Computer Score: ${computerScore}`;

    if (humanScore >= 5 || computerScore >= 5) {
        document.getElementById("rock").style.display = 'none';
        document.getElementById("paper").style.display = 'none';
        document.getElementById("scissors").style.display = 'none';
        restartBtn.style.display = "block";
        document.getElementById("messageTxt").textContent = "Game Over!"
        computerChoiceText.textContent = "";
        if(humanScore >=5)
        {
            winText.textContent = "You Win!"
            
        }
        else
        {
            winText.textContent = "Computer Wins!"
        }
    }
    
}

document.getElementById('rock').addEventListener('click', () => {
    updateUI('rock');
});
document.getElementById('paper').addEventListener('click', () => {
    updateUI('paper');

});

document.getElementById('scissors').addEventListener('click', ()=> {
    updateUI('scissors');
})

const buttonDiv = document.getElementById('playerButtons')
const resultDiv = document.createElement('div');
const computerChoiceText = document.createElement('p');
const resultText = document.createElement('p');
const scoreText = document.createElement('p');
resultDiv.append(computerChoiceText, resultText, scoreText);
document.body.appendChild(resultDiv);
const restartBtn = document.createElement('button');
restartBtn.textContent = "Play Again?"
restartBtn.style.display = "none";
buttonDiv.appendChild(restartBtn);
const winText = document.createElement('p');
winText.textContent = "";
document.body.appendChild(winText);

//Restart the game
restartBtn.addEventListener('click', ()=>{
    //Reset Values
    computerChoiceText.textContent = "";
    resultText.textContent = "";
    scoreText.textContent = "";
    winText.textContent = "";
    humanScore = 0;
    computerScore = 0;
    document.getElementById("rock").style.display = 'inline-block';
    document.getElementById("paper").style.display = 'inline-block';
    document.getElementById("scissors").style.display = 'inline-block';
    restartBtn.style.display = "none";
})
    
