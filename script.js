// Function to get computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
  }
  
  // Function to determine the winner
  function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }

  // Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }

// Function to play the game for 5 rounds
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerChoice = prompt(`Round ${round}: Enter your choice: rock, paper, or scissors`).toLowerCase();
  
      if (!["rock", "paper", "scissors"].includes(playerChoice)) {
        console.log("Invalid choice. Please try again.");
        round--;
        continue;
      }
  
      const computerChoice = getComputerChoice();
      console.log(`Player's choice: ${playerChoice}`);
      console.log(`Computer's choice: ${computerChoice}`);
  
      const result = determineWinner(playerChoice, computerChoice);
      console.log(result);
  
      result === "You win!" ? playerScore++ : result === "Computer wins!" ? computerScore++ : null;
    }
  
    console.log(`\nFinal Score:
  Player: ${playerScore}
  Computer: ${computerScore}`);
  }


  // Start the game by running the following in the console.
  // playGame();