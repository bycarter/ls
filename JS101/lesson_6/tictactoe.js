const RL = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_SIZE = 5;
const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];


while (true) {
  let score = {'Player': 0, 'Computer': 0, 'Game': 1};
  let currentPlayer = RL.question('Who starts the match (computer or player)?');

  while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);
      chooseSquare(board, currentPlayer);
      if (someoneWon(board) || boardFull(board)) break;
      currentPlayer = alternatePlayer(currentPlayer);
    }

    displayBoard(board);
    if (someoneWon(board)) {
      score[detectWinner(board)] += 1;
      prompt(`${detectWinner(board)} won!`);
      prompt(`Player Score:   ${score['Player']}`);
      prompt(`Computer Score: ${score['Computer']}`);
      prompt(`Game Number:    ${score['Game']}`);
      score['Game'] += 1;
    } else {
      prompt(`It's a tie!`);
      prompt(`Player Score:   ${score['Player']}`);
      prompt(`Computer Score: ${score['Computer']}`);
      prompt(`Game Number:    ${score['Game']}`);
      score['Game'] += 1;
    }
    if (detectMatchWinner('Player', score)
      || detectMatchWinner('Computer', score)) {
      break;
    }
    prompt('');
    prompt('Play another Game? (y or n)');
    let answer = RL.question().toLowerCase()[0];
    if (answer !== 'y') break;
  }
  if (detectMatchWinner('Player', score)
    || detectMatchWinner('Computer', score)) {
    prompt(`${detectMatchWinner('Player', score) ? 'Player' : 'Computer'} won MATCH!`);
  }
  prompt('Play another Match? (y or n)');
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
    prompt(`Choose a square ${joinOr(emptySquares(obj))}:`);
    square = RL.question().trim();
    
    if (emptySquares(obj).includes(square)) break;
    prompt('Not a valid choice.');
  }
  obj[square] = HUMAN_MARKER;
}
function computerChoosesSquare(obj) {
  let randomIndex = Math.floor(Math.random() * emptySquares(obj).length);
  let square = emptySquares(obj)[randomIndex];
  
  if (detectWinningSquare(obj, COMPUTER_MARKER)) {
    obj[detectWinningSquare(obj, COMPUTER_MARKER)] = COMPUTER_MARKER;
    return;
  } else if (detectWinningSquare(obj, HUMAN_MARKER)) {
    obj[detectWinningSquare(obj, HUMAN_MARKER)] = COMPUTER_MARKER;
    return;
  } else if (obj['5'] === INITIAL_MARKER) {
    obj[5] = COMPUTER_MARKER;
    return;
  } else {
    obj[square] = COMPUTER_MARKER;
  }
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
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

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

// °º¤ø,¸¸,ø¤º°`°º¤ø,¸ Bonus Features ¸,ø¤º°`°º¤ø,,ø¤°º

function joinOr(arr, delim = ', ', word = 'or') {
  if (arr.length < 2) {
    return String(arr);
  }
  if (arr.length === 2) {
      return `${String(arr[0])} ${word} ${String(arr[1])}`;
  }
  let strOut = '';
  arr.forEach((item, idx) => {
    if (idx !== arr.length -1) {
      strOut += `${String(item)}${delim}`;
    } else {
      strOut += `${word} ${String(item)}`;
    }
  });
  return strOut;
}
function detectMatchWinner(player, scoreObj) {
  return scoreObj[player] === MATCH_SIZE;
}
function detectWinningSquare(obj, MARKER) {
  for (let item of WINNING_LINES) {
    let filledSquares = item.filter(num => obj[num] === MARKER);
    let emptySquares = item.filter(num => obj[num] === INITIAL_MARKER);
    if (filledSquares.length === 2 && emptySquares.length === 1) {
      return emptySquares[0];
    }
  }
  return null;
}
function chooseSquare(obj, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(obj);
    return;
  } else {
    computerChoosesSquare(obj);
    return;
  }
}
function alternatePlayer(player) {
  if (player === 'player') return 'computer';
  return 'player';
}
