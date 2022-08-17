const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`~~> ${msg}`);
}
function displayWinner(choice, computerChoice) {
prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  prompt('Welcome to Rock Paper Scissors');
  
  prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
  let choice = rlSync.question();
  
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
    choice = rlSync.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)? ');
  let again = rlSync.question().toLowerCase();
  while (again[0] !== 'y' && again[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    again = rlSync.question().toLowerCase();
  }

  if (again.toLowerCase() === 'n') break;
}
