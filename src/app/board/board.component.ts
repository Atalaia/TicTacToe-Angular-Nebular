import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[]; // number of squares on the board
  xIsNext: boolean; // determines the current player
  winner: string; // determines the winner

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  // sets up the initial values when starting a brand new game
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    console.log(this.squares);
  }

  // determines which player is currently using the game board
  // if xIsNext is true, next player will be X, otherwise it will be O
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // this method will serve as an event handler 
  // for when the user clicks in one of the buttons to make a move
  makeMove(index: number) {
    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
      console.log(this.squares);
    }
    this.winner = this.calculateWinner();
  }

  // calculates the winner
  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
