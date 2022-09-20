// --> Gameplay
// player and dealer are dealt
//  > alternate cards, player can see only one of dealers cards
// player is presented with three options
//  > hit, player is dealt another card
//    -> game calculates new total hand value
//  > stay, player keeps current hand and waits for dealer turn
// dealer turn
//  > hit until value of hand is 17 or greater
// determine if either busts
// compare cards & declare winner

const RL = require('readline-sync');
const suitKey = {
  'hearts': '♡', 'clubs': '♧', 'spades': '♤', 'diamonds': '♢'
};
let fullDeck = { 
  'hearts': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  'clubs': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  'spades': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
  'diamonds': [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
};

let deck = createDeck(fullDeck);
let computerHand = [];
let playerHand = [];

while (true) {
  shuffle(deck);
  deal(deck, playerHand, computerHand);
  displayHandsSimple(playerHand, computerHand);
  
  while (true) {
    let answer = RL.question('hit or stay? ');
    if (answer === 'stay' || busted()) break;
  }
  if (busted()) {
    // end or ask to play again}
  } else {
    console.log('You chose to stay!');
  }
//
break;
}


function displayHandsSimple(playerHandIn, computerHandIn) {
  console.clear();
  if (computerHandIn[0][1] === 10) {
    console.log(`Dealer\'s hand: [${computerHandIn[0][1]} ${suitKey[computerHandIn[0][0]]}] [•  •]`);
  } else {
    console.log(`Dealer\'s hand: [${computerHandIn[0][1]}  ${suitKey[computerHandIn[0][0]]}] [•  •]`);
  }
  console.log('');
  let playerHandStr = '';
  playerHandIn.forEach(card => {
    if (card[1] === 10) {
      playerHandStr += '[' + card[1] + ' ' + suitKey[card[0]] + '] ';
    } else {
    playerHandStr += '[' + card[1] + '  ' + suitKey[card[0]] + '] ';
    }
  });
  console.log(`Player\'s Hand: ${playerHandStr}`);
}
/*
function displayHands(playerHandIn, computerHandIn) {
  console.log(`**************************************************`);
  console.log(`               +---+----+`);
  console.log(`               |${computerHandIn[0][1]}  |•  •|`);
  console.log(`               |   |    |`);
  console.log(`               |${suitKey[computerHandIn[0][0]]}  |•  •|`);
  console.log(`               +---+----+`);
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log(`            +----+ +----+`);
  console.log(`            |${playerHandIn[0][1]}  ${suitKey[playerHandIn[0][0]]}| |${playerHandIn[1][1]}  ${suitKey[playerHandIn[1][0]]}|`);
  console.log(`            |    | |    |`);
  console.log(`            |${suitKey[playerHandIn[0][0]]}  ${playerHandIn[0][1]}| |${suitKey[playerHandIn[1][0]]}  ${playerHandIn[1][1]}|`);
  console.log(`            +----+ +----+`);
}*/
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
function drawCard(deckIn) {
  let card = deckIn.pop();
  return card;
}
function deal(deckIn, handIn1, handIn2) {
  for (let num = 0; num < 2; num++) {
    handIn1.push(deckIn.pop());
    handIn2.push(deckIn.pop());
  }
}
function shuffle(arr) {
  for (let idx = arr.length -1; idx > 0; idx--) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [arr[idx], arr[otherIdx]] = [arr[otherIdx], arr[idx]];
  }
}

function busted() {};

/*

+----+
|♤  9|
|    |
|9  ♢|
+----+
+----+
| ^ ̫^|
|    |
|^ ̫^ |
+----+
+----+
|("< |
|/ ) |
| L  |
+----+
+----+
|[O.o]
|    |
[O.o]|
+----+
+----+
|•ㅅ•|
|    |
|•ㅅ•|
+----+
+----+
|♤  ♢|
|    |
|♡  ♧|
+----+
*/
