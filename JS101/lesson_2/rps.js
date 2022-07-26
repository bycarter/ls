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
  // call displayRules

  let match = 1;
  let userScore;
  userScore = 0;
  let computerScore = 0;

  while (true) {
    prompt(`MATCH ${match}`);

    let choice = promptUserForChoice();
    let computerChoice = computerMakesChoice();

    prompt(`You chose ${choice}, computer chose ${computerChoice}`);
    displayWinner(choice, computerChoice);

    // cannot refactor logic into updateScores, scores are scoped in l:13 while loop
    updateScores(choice, computerChoice);
    displayScore(userScore, computerScore);

    console.log(); // line break for aesthetics
    match += 1;
    // cannot refactor logic into updateScores, scores are scoped in l:13 while loop
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
function promptUserForChoice() {
  prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
  prompt("Pst... you may enter the first letter, or 'k' for spock!");
  let userInput = rlSync.question('~~> ');

  while ((!VALID_CHOICES.includes(userInput)) &&
  (!VALID_CHOICES_SHORT.includes(userInput))) {
    prompt("That's not a valid userInput");
    prompt(`Choose One: ${VALID_CHOICES.join(', ')}`);
    prompt("Pst... you may enter the first letter, or 'k' for spock!");
    userInput = rlSync.question('~~>');
  }
  userInput = resolveUserInput(userInput);
  return userInput;
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
function computerMakesChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}// ~~~~~~~~~~~~~~~~~>>>>>>>>>><<<<<<<<<<<<<<<<
function updateScores (choiceIn, computerChoiceIn) {
  if (playerWins(choiceIn, computerChoiceIn)) {
    userScore += 1;
  } else if (playerWins(computerChoiceIn, choiceIn)) {
    computerScore += 1;
  }
}// ~~~~~~~~~~~~~~~~~>>>>>>>>>><<<<<<<<<<<<<<<<
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
function someoneOne() {
  return match === TOTAL_MATCHES;
}
function displayRules() {};