//array of players
var players = [
		{'name': 'Player 1', hand: []}, 
    {'name': 'Player 2', hand: []},       
    {'name': 'Player 3', hand: []},
    {'name': 'Player 4', hand: []},
    {'name': 'Player 5', hand: []}
    ];
//array of suits
var suits = ['club','diamond','heart','spade'];
//array of cards
var cards = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace'];
//array of the entire deck of cards
var deck = [];
//array of the players hand of cards

//loops over the suits array
for (var i=0;i <suits.length; i++) {
		//loops over the cards array
    for (var c=0; c<cards.length; c++) {
        //creates a card object with the above two loops and names them
        var card = {'card': cards[c], 'suit':suits[i]};
        deck.push(card);
    }
}
//one specific card
console.log(card);
//entire deck of cards
console.log(deck);

//randomizes picked cards
deck.sort();

//loops over the deck array 5 times
var k = 0;
//adds 5 arrays to each player
  for (var i=0; i<5; i++) { 
  //adds an array per player
      for (var p=0; p<players.length; p++) {
      //k pushes 5 cards to each players hand
      players[p].hand.push( deck[k] );
      k++;
      } 
  }
// loops over the player array to print the name of each player
for(var a=0;a<players.length;a++) {
    console.log(players[a].name+": ");
}


//each player with an array of their hand of cards
console.log(players);