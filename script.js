// Assign values to rock, paper, and scissors
let rock = 1;
let paper = 2;
let scissors = 3;

// Function to get computer's choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber === 1) {
      return "rock";
    } else if (randomNumber === 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }
//rock paper and scissors

// Test the function
console.log(getComputerChoice(rock, scissors));