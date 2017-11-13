var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var pairs = document.getElementById('pairs');
var mismatched = document.getElementById('mismatched');
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
		pairs.textContent ++; 
	} else {
		alert("Sorry, try again.")
		mismatched.textContent ++;
	}
	//reseting cardsInPlay allows to play more than one round.
	cardsInPlay = [];
}
var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	// Remove event listener so same card can't be clicked twice
	this.removeEventListener('click', flipCard);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if(cardsInPlay.length === 2) {
		checkForMatch();
	}
}
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cur = cards[i];
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
var shuffleCards = function () {
	var range = [0, 1, 2, 3];
	var counter = 0;
	while(range.length > 0) {
		var random = Math.floor(Math.random() * range.length);
		var i = range.splice(random, 1);
		var cardElement = document.getElementsByTagName('img')[counter++];
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
	}
	cardsInPlay = []
}
var resetBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.getElementsByTagName('img')[i];
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.addEventListener('click', flipCard);
	}
	cardsInPlay = []
}
document.getElementById('reset-board').addEventListener('click', resetBoard);
document.getElementById('shuffle-cards').addEventListener('click', shuffleCards);
createBoard();
