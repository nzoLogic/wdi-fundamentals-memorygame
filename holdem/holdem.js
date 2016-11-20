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
	var dealCards = function(deck){
		var dealer = document.getElementById('dealer'),
			user = document.getElementById('user'),
			round = 1, 
			suit = suitSelect(),
			val = valSelect (),
			card = deck[suit][val].slice();
	//if preflop deal each person 2 cards
	console.log(card);
	//if it's the flop deal 3 face up cards

	//if its the turn deal one card face up

	//if it's the river deal one card face up

	};

//preflop round (deals 2 cards)
	var preflop = function(dealer, user, deck){
		//deal dealer 2 cards

		//deal user 2 cards 
	};	


var currentDeck = compiledDeck();
var suit = suitSelect();
