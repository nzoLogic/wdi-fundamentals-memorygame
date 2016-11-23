/* 
This section is for all functions pertaining to texas holdem card generators by using 1 standard deck.
The following functions include standard deck 52 card generators, suit assignment, and random deck shuffle
for gameplay 
			*/


//52 card generator
	var cardGenerator = function(){
		var cardValue = [];
	//assign face value (ace, 2, 3.. etc)
		cardValue.push('ace');
		for(var i = 1; i < 10; i++){
			cardValue.push(i + 1);
		}
		cardValue.push('jack');
		cardValue.push('queen');
		cardValue.push('king');
		return cardValue;
	};

//52 card suit assignment
	var compiledDeck = function(){
		var suits = {
			'spades': cardGenerator(),
			'clubs': cardGenerator(),
			'diamonds': cardGenerator(),
			'hearts': cardGenerator()
		}
		return suits;
	};

//return random suit value
	var suitSelect = function(){
		var arr = ['spades', 'clubs', 'diamonds', 'hearts'];
		return arr[Math.floor(Math.random() * 4)];
	};

//card value select
	var valSelect = function(){
		return Math.floor(Math.random() * 13);
	};


	/* always deal users cards faceup */

//deals cards (dealer first, then user/computer)
var createCard = function(){
		//game board
	var board = document.getElementById('flopLoc'),
		num = 4;
		//card creation & attribute assignments
	if(document.getElementsByClassName('flop').length < 4){
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
//preflop round (deals 2 cards)
	var startHand = function(dealerHand, userHand){
		var user = document.getElementsByClassName('user-section')[0],
			dealer = document.getElementsByClassName('dealer')[0];
		//deal user one card

		//dealer gets a card

	};	

var cardVals = cardGenerator(),
	val = cardVals[valSelect()],
    suit = suitSelect(),
    opponentsCard = [],
	usersCard = [],
	flop = [];
