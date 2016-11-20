
///creates cards using div elements, assigns class=card, data-card, and event listener
var createCard = function(){
		//game board
	var board = document.getElementById('flop'),
		num = 4;
		//card creation & attribute assignments
	if(document.getElementsByClassName('card').length < 4){
		for(var i = 0; i < num; i++){
			var card = document.createElement('div');
			card.className = 'card';
			card.setAttribute('data-card', cards[i]);
			card.addEventListener('click', isTwoCards);
			board.appendChild(card);
		}
	}
	document.getElementsByTagName('p')[0].removeAttribute('class');
};

//checks if two cards are in the 'cardsInPlay array' and uses the callback function isMatch()
var isTwoCards = function(){
	//assigns 'data-card' att to var
	var cardType = this.getAttribute('data-card');
	cardType === 'king'? this.innerHTML = '<img src="images/king.png" alt="king">' : 
						 this.innerHTML = '<img src="images/queen.png" alt="queen">';
	cardsInPlay.push(cardType);
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};

//callback function that alerts if two cards are a match. uses clearCards callback function
function isMatch(arr){
	if(arr[0] === arr[1]){
		setTimeout(function(){
		alert('You found a match!');
		clearCards();
		}, 500);
	}
	else {
		setTimeout(function(){
		alert('Sorry, try again!');
		clearCards();
		}, 500);
	}
}

//callback function that clears the img elements of the cards selected
var clearCards = function(){
	var card = document.getElementsByClassName('card');
	for(var i = 0; i < card.length; i++){
		if(card[i].hasChildNodes()){
			card[i].removeChild(card[i].lastChild);
		}
	}
};

//assigns reveal class
function reveal(){
	var p = document.getElementsByTagName('p')[0];
	if(p.hasAttribute('class')){
		p.removeAttribute('class');
	}
	else {
		p.setAttribute('class', 'reveal');

	}
}

var cardsInPlay = [];
var cards = ['queen', 'queen', 'king', 'king'];
document.getElementById('instruction').addEventListener('click', reveal);
document.getElementById('game').addEventListener('click', createCard);
