//black-jack game by
//Owen Timz
//create variable and output

//loop between arrays
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
  'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four',
  'Three', 'Two', 'One'
];



//create function that creates deck each time we start game
function createDeck()
{
  //clear deck sfter game gameOver
let  deck =[];
  //use for lop to generate the cards and store in deck[];
  for (let valueIdx = 0; valueIdx < values.length; valueIdx++)
  {
    for(suitIdx = 0; suitIdx < suits.length; suitIdx++)
    {
      //push to the createDeck
      deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
    }
  }
  return deck;
}

//create arrays to hold the cards
let deck = createDeck();

//check if the cards are created;
for(let i = 0; i < deck.length; i++)
{
  console.log(deck[i]);
}
//variable to hold players getCardString
let playerCards = [deck[0], deck[1]];
//print Results
console.log("Welcome to Black-Jack Game");

console.log("you are dealt: ");
console.log(" " + playerCards[0]);
console.log( '' + playerCards[1]);
