const rlSync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES_SHORT = ['r', 'p', 's', 'l', 'k'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};
const NUMBER_OF_MATCHES = 5;

while (true) {
  console.clear();
  prompt('Welcome to Rock Paper Scissors Lizard Spock');
  prompt(''); // line break for aesthetics

  let match = 1;
  let userScore = 0;
  let computerScore = 0;

  while (true) {
    prompt(`MATCH ${match}`);
    prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
    prompt("Pst... you may enter the first letter, or 'k' for spock!");
    let choice = rlSync.question('~~> ');

    while ((!VALID_CHOICES.includes(choice)) &&
    (!VALID_CHOICES_SHORT.includes(choice))) {
      prompt("That's not a valid choice");
      prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
      prompt("Pst... you may enter the first letter, or 'k' for spock!");
      choice = rlSync.question('~~>');
    }
    choice = resolveUserInput(choice);

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    displayWinner(choice, computerChoice);

    if (playerWins(choice, computerChoice)) {
      userScore += 1;
    } else if (playerWins(computerChoice, choice)) {
      computerScore += 1;
    }
    displayScore(userScore, computerScore);

    console.log(); // line break for aesthetics
    match += 1;
    if (match === NUMBER_OF_MATCHES) {
      displayGrandWinner(userScore, computerScore);
      break;
    }
  }

  prompt('Do you want to play another match? (y/n) ');
  let again = rlSync.question('~~> ').toLowerCase();

  while (again[0] !== 'y' && again[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    again = rlSync.question('~~> ').toLowerCase();
  }

  if (again.toLowerCase() === 'n') break;
  console.log(); // line break for aesthetics
}

function prompt(msg) {
  console.log(`~~> ${msg}`);
}
function resolveUserInput(choiceIn) {
  let result = choiceIn;

  if (VALID_CHOICES_SHORT.includes(choiceIn)) {
    for (let i = 0; i < VALID_CHOICES_SHORT.length; i++) {
      if (choiceIn === VALID_CHOICES_SHORT[i]) {
        result = VALID_CHOICES[i];
      }
    }
  }
  return result;
}
function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}
function displayWinner(choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt('You won!');
  } else if (playerWins(computerChoice, choice)) {
    prompt('Computer won!');
  } else {
    prompt("It's a tie!");
  }
}
function displayScore(userIn, computerIn) {
  prompt(`Your Score: ${userIn}, Computer Score: ${computerIn}`);
}
function displayGrandWinner(userIn, computerIn) {
  if (userIn > computerIn) {
    prompt('You are the GRAND WINNER!!');
  } else if (computerIn > userIn) {
    prompt('Computer is the GRAND WINNER!!');
  } else {
    prompt('Match is a TIE!!');
  }
}
function displayRules() {

