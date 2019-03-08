import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock Paper Scissors Game';
  gameStarted = false;
  playerText: string;
  opponentText: string;
  resultText: string;

  startGame() {
    this.gameStarted = true;
    this.initializeGame();
  }

  endGame() {
    this.gameStarted = false;
  }

  initializeGame() {
    this. playerText = '';
    this. opponentText = '';
    this. resultText = '';
  }

  chooseItem(item: string) {
    const opponentItem = this.chooseOpponentItem();
    this.playerText = `You chose: ${item}`;
    this.opponentText = `Your opponent chose: ${opponentItem}`;
    this.resultText = `Result: ${this.getResult(item, opponentItem)}`;
  }

  chooseOpponentItem(): string {
    const items = ['rock', 'paper', 'scissors'];
    return randomItem(items);
  }

  getResult(playerItem: string, opponentItem: string): string {

    if (playerItem === opponentItem) {
      return 'Tie';
    }	else {
      let win = false;
      if (playerItem === 'rock') {
        win = opponentItem === 'scissors' ? true : false;
      } else if (playerItem === 'paper') {
        win = opponentItem === 'rock' ? true : false;
      } else if (playerItem === 'scissors') {
        win = opponentItem === 'paper' ? true : false;
      }
      return win ? 'You won' : 'You lost';
    }
  }
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}
