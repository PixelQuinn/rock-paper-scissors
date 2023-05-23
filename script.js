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

  // Function to play the game
function playGame() {
    while (true) {
      const playerChoice = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
  
      if (!["rock", "paper", "scissors"].includes(playerChoice)) {
        console.log("Invalid choice. Please try again.");
        continue;
      }
  
      const computerChoice = getComputerChoice();
      console.log(`Player's choice: ${playerChoice}`);
      console.log(`Computer's choice: ${computerChoice}`);
      console.log(determineWinner(playerChoice, computerChoice));
  
      if (prompt("Do you want to play again? (yes/no)").toLowerCase() !== "yes") {
        break;
      }
    }
  }
  