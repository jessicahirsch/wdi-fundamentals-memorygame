console.log("JS file is connected to HTML! Woo!")

// var cardOne = document.getElementById("cardOne");
// var CardTwo = document.getElementById("cardTwo");
// var CardThree = document.getElementById("cardThree");
// var CardFour = document.getElementById("cardFour");

/* if (cardTwo === cardFour) {
	alert('Sorry, try again.')
}
if else (cardOne === cardThree) {
	alert('Sorry, try again.')
}
if else (cardOne === cardTwo) {
	alert('You found a match!')
}
if else (cardOne === cardFour) {
	alert('Sorry, try again.')
} */

var gameBoard = document.getElementById('game-board'); //Create the game board


// var cardOne = document.createElement('div'); //Create cardOne
// cardOne.setAttribute('king');
// var cardTwo = document.createElement('div'); //Create cardTWo
// cardTwo.setAttribute('king');
// var cardThree = document.createElement('div'); //Create cardThree
// cardThree.setAttribute('queen');
// var cardFour = document.createElement('div'); //Create cardFour
// cardFour.setAttribute('queen');

var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = [];
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		// create card
		cardElement.className ='card';
		// set the class to a card 
		cardElement.setAttribute('data-card', cards[i]);
		// set the card to the i-th term in the array
		cardElement.addEventListener('click', isTwoCards)
		// add an on-click event listener to run the isTwoCards function when one is clicked
		gameBoard.appendChild(cardElement);
		// append the card to the board
	}
}

	// cardElement.innerHTML = '<img src="spades-884197_640.png" alt="King of Spades" />';.

function isTwoCards() {

	cardsInPlay.push(this.getAttribute('data-card'));
	this.innerHTML = '<img src="spades-884197_640.png" alt="King of Spades" />';

	console.log(cardsInPlay);

	 if (cardsInPlay.length === 2) {
	 	isMatch(cardsInPlay);
	 	cardsInPlay = [];
	}
}

function isMatch(cards) {
	
}

document.addEventListener('DOMContentLoaded', createBoard);

	/* if (cardOne == cardTwo) {
		result = "You found a match!";
	} else if (cardOne == cardThree) {
		result = "Sorry, try again.";
	} else if (cardOne == cardFour) {
	 	result = "Sorry, try again.";
	} else if (cardTwo == cardThree) {
		result = "Sorry, try again.";
	} else if (cardTwo == cardFour) {
		result = "Sorry, try again.";
	} else if */
