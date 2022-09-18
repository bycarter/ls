const RL = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';


while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);
    
    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

  }
  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
  prompt('Play again? (y or n)');
  let answer = RL.question().toLowerCase()[0];
  if (answer !== 'y') break;
}



function displayBoard(obj) {
  console.clear();
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${obj['1']}  |  ${obj['2']}  |  ${obj['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${obj['4']}  |  ${obj['5']}  |  ${obj['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${obj['7']}  |  ${obj['8']}  |  ${obj['9']}`);
  console.log('     |     |');
  console.log('');
}
function initializeBoard() {
  let board = {};
  for (let item = 1; item <= 9; item++) {
    board[String(item)] = INITIAL_MARKER;
  }
  return board;
}
function playerChoosesSquare(obj) {
  let square;

  while (true) {
    prompt(`Choose a square ${emptySquares(obj).join(', ')}:`);
    square = RL.question().trim();
    
    if (emptySquares(obj).includes(square)) break;
    prompt('Not a valid choice.');
  }
    board[square] = HUMAN_MARKER;
}
function computerChoosesSquare(obj) {
  let randomIndex = Math.floor(Math.random() * emptySquares(obj).length);
  let square = emptySquares(obj)[randomIndex];
  obj[square] = COMPUTER_MARKER;
}
function emptySquares(obj) {
  return Object.keys(obj).filter(key => obj[key] === INITIAL_MARKER);
}
function prompt(string) {
  console.log(string);
}
function boardFull(obj) {
  return emptySquares(obj).length === 0;
}
function someoneWon(obj) {
  return !!detectWinner(obj);
}
function detectWinner(obj) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      obj[sq1] === HUMAN_MARKER &&
      obj[sq2] === HUMAN_MARKER &&
      obj[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      obj[sq1] === COMPUTER_MARKER &&
      obj[sq2] === COMPUTER_MARKER &&
      obj[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

