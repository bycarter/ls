/*
## Organize
Game (n)
Board (n)
Row (n)
Square (n)
Marker (n)
Player (n)
  Mark (v)
  Play (v)
  Human (n)
  Computer (n)
 */
class Square {
  constructor(marker = ' ') {
    // STUB
    this.marker = marker;
  }
  toString() {
    return this.marker;
  }
}
class Board {
  constructor() {
    // STUB
    this.squares = {
      1: new Square(),
      2: new Square(),
      3: new Square(),
      4: new Square('X'),
      5: new Square(),
      6: new Square(),
      7: new Square('O'),
      8: new Square(),
      9: new Square(),
    };
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

class Row {
  constructor() {
    // STUB
  }
}

class Marker {
  constructor() {
    // STUB

  }
}

class Player {
  constructor() {
    // STUB
  }
  mark() {
    // STUB
  }
  play() {
    // STUB
  }
}

class Human extends Player {
  constructor() {
    super();
    // STUB
  }
}

class Computer extends Player {
  constructor() {
    super();
    // STUB
  }
}

class TTTGame {
  constructor() {
    // STUB
    this.board = new Board();
  }
  play() {
    // SPIKE
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log('Welcome to Tic Tac Toe!');
  }
  displayGoodbyeMessage() {
    console.log('Thanks for playing Tic Tac Toe! Goodbye!')
  }
  displayResults() {
    // STUB
  }
  //displayBoard() {
    // DELETE THIS METHOD
  //}
  firstPlayerMoves() {
    // STUB
  }
  secondPlayerMoves() {
    // STUB
  }
  gameOver() {
    // STUB
    return false;
  }
}

let game = new TTTGame();
game.play();