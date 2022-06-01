

/* A single round of RPS. 
Prompt the user for their selection, be sure to use toLowerCase for case-insensitive response
Call computerPlay to get the computer's selection
Use each selection as parameters
Compare the selections using <If> statements
Return a string that determines the winner of the round
*/

// Write a function for playing one round of RPS
function playRound(player, computer) {
  
    if (player == computer) {
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`); 
        return "This round is a tie";
    } 

    if (winner(player, computer) == player) {
        playerScore += 1;
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
        return `You Win! ${player} beats ${computer}!`;
    } else {
        computerScore += 1;
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
        return `You Lose, ${computer} beats ${player}.`;
    }
}


// Create a function 'game()', call 'playRound' five times to create a 5-round game of RPS

const game = () => {
   
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection(), computerPlay())); 
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);   
    }

    if (playerScore > computerScore) {
        return "WINNER!";
    } else if (playerScore < computerScore) {
        return "Sorry, you lose...play again!";
    } else {
        return "It's a tie!";
    }
};

// Create a function that prompts the user to pick between criteria; prompt user until answer fits criteria via a while loop
const playerSelection = () => {
    let x = 0;
    let choose = prompt("Choose 'Rock', 'Paper', or 'Scissors': ").toLowerCase();
   
    while (x == 0) {

        if ((choose == "rock") || (choose == "paper") || (choose == "scissors")) {
            x++;
            return choose;    
        } else {
            choose = prompt("Invalid entry, please enter 'Rock', 'Paper', or 'Scissors': ").toLowerCase();
            x = 0;
        }
        
    } 
};






// console.log(game());

// DOM 
const playerResult = document.getElementById('player');
const playerScoreDisplay = document.getElementById('player-score');
const computerResult = document.getElementById('computer');
const computerScoreDisplay = document.getElementById('computer-score');
const roundResultDisplay = document.getElementById('result');
const winnerDisplay = document.getElementById('winner');
const playerButton = document.querySelectorAll('button');
const container = document.getElementById('container');
let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;

playerButton.forEach(playerChoice => playerChoice.addEventListener('click', playGame));

function playGame(e) {
    playerResult.textContent = e.target.id;
    computerPlay();
    winner();
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

}

// Computer picks randomly, rock, paper, or scissors
function computerPlay() {
    play = Math.floor(Math.random() * 3);

    if (play == 0) {
       computerChoice = "rock";
    } else if (play == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    computerResult.textContent = computerChoice;

}
// Write a helper function that will determine which item beats the other
function winner() {
    player = playerResult.textContent;
    computer = computerChoice;

    if ((player == "rock") && (computer == "scissors")) {
        result = "You Win!";
        playerScore++;
    } else if ((player == "paper") && (computer == "rock")) {
        result = "You Win!";
        playerScore++;
    } else if ((player == "scissors") && (computer == "paper")) {
        result = "You Win!";
        playerScore++;
    } else if ((player == "rock") && (computer == "paper")) {
        result = "Computer Wins!";
        computerScore++;
    } else if ((player == "scissors") && ("rock")) {
        result = "Computer Wins!";
        computerScore++;
    } else if ((player == "paper") && (computer == "scissors")) {
        result = "Computer Wins!";
        computerScore++;
    } else {
        result = "It's a Tie!";
        
    }

    roundResultDisplay.textContent = `Round Result: ${result}`;

    if (playerScore >= 5) {
        winnerDisplay.textContent = "Player Wins!";
        playerButton.forEach(playerChoice => playerChoice.removeEventListener('click', playGame));
        gameOver();
    } else if (computerScore >= 5) {
        winnerDisplay.textContent = "Computer Wins!";
        playerButton.forEach(playerChoice => playerChoice.removeEventListener('click', playGame));
        gameOver();
    }
}

function gameOver() {
    const restartButton = document.createElement('button');
    restartButton.innerText = "PLAY AGAIN";
    container.appendChild(restartButton);
    restartButton.addEventListener('click', playAgain);

}

function playAgain() {
    window.location.reload();
}








