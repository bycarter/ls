const RL = require('readline-sync');
const suitKey = {
  hearts: '♡', clubs: '♧', spades: '♤', diamonds: '♢'
};
let fullDeck = {
  hearts: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  clubs: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  spades: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  diamonds: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
};

while (true) {
  let deck = createDeck(fullDeck);
  let computerHand = [];
  let playerHand = [];

  shuffle(deck);
  deal(deck, playerHand, computerHand);
  displayHandsSimple(playerHand, computerHand);

  current:
  while (true) {

    while (true) {
      console.log('');
      let answer = RL.question('hit or stay? ');
      if (answer === 'stay') break;

      hitHand(deck, playerHand);
      displayHandsSimple(playerHand, computerHand);

      if (busted(playerHand)) {
        console.log('BUST!');
        break current;
      }
    }

    while (true) {
      console.log(computerHand);
      if (total(computerHand) < 17) {
        hitHand(deck, computerHand);
        displayHandsSimple(playerHand, computerHand, false);
      } else {
        displayHandsSimple(playerHand, computerHand, false);
        break;
      }
    }
    console.log('');
    console.log(displayWinner(playerHand, computerHand));

    break;
  }
  console.log('');
  let again = RL.question('Play again? (y / n) ');
  if (again !== 'y') break;
}


function displayWinner(playerHandIn, computerHandIn) {
  let playerScore = total(playerHandIn);
  let computerScore = total(computerHandIn);
  if (playerScore > computerScore) {
    return 'You won!!';
  } else if (computerScore > playerScore) {
    return 'Dealer won!!';
  } else {
    return 'It\'s a tie!';
  }
}
function hitHand(deckIn, handIn) {
  let deckPop = [];
  deckPop = deckIn.pop();
  handIn.push(deckPop);
}
function displayHandsSimple(playerHandIn, computerHandIn, hidden = true) {
  console.clear();
  if (hidden) {
    if (computerHandIn[0][1] === 10) {
      console.log(`Dealer's hand: [${computerHandIn[0][1]} ${suitKey[computerHandIn[0][0]]}] [•  •]`);
    } else {
      console.log(`Dealer's hand: [${computerHandIn[0][1]}  ${suitKey[computerHandIn[0][0]]}] [•  •]`);
    }
  } else {
    console.log(`Dealer's hand: ${expandCards(computerHandIn)}`);
  }
  console.log('');
  console.log(`Player's hand: ${expandCards(playerHandIn)}`);
}
function expandCards(handIn) {
  let strOut = '';
  handIn.forEach(card => {
    if (card[1] === 10) {
      strOut += ('[' + card[1] + ' ' + suitKey[card[0]] + '] ');
    } else {
      strOut += ('[' + card[1] + '  ' + suitKey[card[0]] + '] ');
    }
  });
  return strOut;
}
function createDeck(deckIn) {
  let deckOut = [];
  for (let suit in deckIn) {
    for (let num of deckIn[suit]) {
      let card = [suit, num];
      deckOut.push(card);
    }
  }
  return deckOut;
}
function deal(deckIn, handIn1, handIn2) {
  for (let num = 0; num < 2; num++) {
    handIn1.push(deckIn.pop());
    handIn2.push(deckIn.pop());
  }
}
function shuffle(arr) {
  for (let idx = arr.length - 1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [arr[idx], arr[otherIdx]] = [arr[otherIdx], arr[idx]];
  }
}
function total(handIn) {
  let values = handIn.map(card => card[1]);

  let sum = 0;
  values.forEach(num => {
    if (num === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(num)) {
      sum += 10;
    } else {
      sum += Number(num);
    }
  });
  values.filter(num => num === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });

  return sum;
}
function busted(handIn) {
  if (total(handIn) <= 21) {
    return false;
  }
  return true;
}
