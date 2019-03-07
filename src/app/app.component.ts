import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Welcome to Rock Paper Scissors Game';
	gameStarted = false;
	playerItem: string;
	opponentItem: string;
	resultText: string;


	startGame() {
		this.gameStarted = true;
	}

	endGame() {
		this.gameStarted = false;
	}

	chooseItem(item: string) {
		const opponentItem = this.chooseOpponentItem();		
		this.resultText = `You chose ${item}. Your opponent chose ${opponentItem}. Result: ${this.getResult(item, opponentItem)}.`;	
	}

	chooseOpponentItem(): string {
		const items = ['rock', 'paper', 'scissors'];
		return this.randomItem(items);
	}

	randomItem(items) {		
		return items[Math.floor(Math.random() * items.length)];		
	}

	getResult(playerItem, opponentItem) {
		var win = false;

		if (playerItem === opponentItem) {
			return 'Tie';
		}
		else {
			switch (playerItem) {
				case 'rock':
					opponentItem === "scissors" ? win = true : win = false;
				case 'paper':
					opponentItem === "rock" ? win = true : win = false;
				case 'scissors':
					opponentItem === "paper" ? win = true : win = false;
			}
			return win ? 'You win' : 'You lose';
		}

	}
}
