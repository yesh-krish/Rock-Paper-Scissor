function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
  
  function playgame(x, y) {
    if (x === y) {
      return "tie";
    } else if (
      (x === 'rock' && y === 'scissors') ||
      (x === 'paper' && y === 'rock') ||
      (x === 'scissors' && y === 'paper')
    ) {
      return "player";
    } else {
      return "computer";
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    const choices = ['rock', 'paper', 'scissors'];
  
    for (let i = 0; i < 5; i++) {
      let playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
      if (!choices.includes(playerSelection)) {
        console.log("Reload and restart the game!");
        return;
      }
      playerSelection = playerSelection.toLowerCase();
      const computerSelection = getComputerChoice();
      const result = playgame(playerSelection, computerSelection);
  
      if (result === "player") {
        playerScore++;
        console.log("You win this round!");
      } else if (result === "computer") {
        computerScore++;
        console.log("Computer wins this round!");
      } else {
        console.log("It's a tie in this round!");
      }
  
      console.log(`Computer chose ${computerSelection}`);
    }
  
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry! Computer wins the game!");
    } else {
      console.log("It's a tie in the game!");
    }
  }
  
  game();
  
  
  
  
  
  
  
  