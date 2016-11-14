var cardOne = "queen", cardTwo = "king", cardThree = "queen", cardFour = "king";

var createCard = function(num){
	var board = document.getElementById('game-board');
	for(var i = 0; i < num; i++){
		var card = document.createElement('div');
		card.className = 'card';
		board.appendChild(card);
	}
}

createCard(4);