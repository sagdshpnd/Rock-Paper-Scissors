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
function gethumanChoice() {
    let humanChoice = prompt("Lets play Rock, Paper, Scissors! \nEnter your choice!");
    console.log(humanChoice);
    return humanChoice
}

//console.log(getComputerChoice())
//gethumanChoice();


//Variables to keep score
let humanScore = 0;
let computerScore = 0;

//function to play a single round
function playRound(humanArg, computerArg) {

    humanArg = humanArg.toLowerCase()

    if(humanArg === "rock" && computerArg === "paper") {
        console.log("Rock loses to Paper! You Lose!!");
        computerScore +=1;
        //Rock & Paper
    }
    else if(humanArg === "paper" && computerArg === "rock") {
        console.log("Paper beats Rock! You Win!!");
        humanScore +=1;
        //Rock & Paper
    }
    else if(humanArg === "paper" && computerArg === "scissors") {
        console.log("Paper loses to Scissors! You Lose!!");
        computerScore +=1;
        //Paper & Scissors
    }
    else if(humanArg === "scissors" && computerArg === "paper") {
        console.log("Scissors beats Paper! You Win!!");
        humanScore +=1;
        //Paper & Scissors
    }
    else if(humanArg === "scissors" && computerArg === "rock") {
        console.log("Rock beats Scissors! You Lose!!");
        computerScore +=1;
        //Rock and Scissors
    }
    else if(humanArg === "rock" && computerArg === "scissors") {
        console.log("Rock beats Scissors! You Win!!");
        humanScore +=1;
        //Rock and Scissors
    }
    else if(humanArg === computerArg) {
        console.log("Its a tie!");
    }
    else {
        console.log("Wrong Input! Refresh to try again!");
    }

    return humanScore, computerScore;
}
function playGame() {

    //Constants to store the human and computer selections
    for(let i=0; i<5 ; i++){

        const humanSelection = gethumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
        console.log(`Your Score: ${humanScore} \nComputer Score: ${computerScore}`);
    }

}//end of playGame function


playGame()


