var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
};


//Function that stores steps when user flips card
function flipCard(cardId) {
	cardsInPlay.push(cards[cardId]);

	console.log("User flipped " + cards[cardId]);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	};
	
};

flipCard(0);
flipCard(2);

/*  Note:  I haven't been able to get this..need help!

Praise God!  Solved it!  I needed to actually put console.log("User flipped " + cards[cardId]); 
before the if statement in the flipCard function

	
	My console display:
	User flipped queen
	Sorry, try again
	User flipped king

	It is supposed to display:
	User flipped queen
	User flipped king
	Sorry, try again.


*/
