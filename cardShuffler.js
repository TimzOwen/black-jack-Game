//black-jack game by
//Owen Timz
//create variable and output

//loop between arrays ! CARD VARIABLES
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
  'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four',
  'Three', 'Two', 'One'
];


//variales to access the UI DOM VARIABLES
let textArea = document.getElementById('txtArea');
let hitBtn = document.getElementById('hitGame');
let stayBtn = document.getElementById('stayGame');
let newGameBtn = document.getElementById('newGame');

//GAME VARIABLES
let gameStarted = false,
gameOver= false,
playerWon= false,
dealerCards = [],
playerCards = [],
dealerScore = 0,
playerScore = 0,
deck = [];


//hide buttons before game start
hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
showStatus();


//add action an listener to the new game btn

newGameBtn.addEventListener('click', function() {

  gameStarted = true;
  gameOver = false;
  playerWon = false;

  deck = createDeck();
  shuffleDeck(deck);

  dealerCards = [getNextCard(), getNextCArd()];
  dealerCards = [getNextCard(), getNextCArd()];


  newGameBtn.style.display = 'none';
  hitBtn.style.display = 'inline';
  stayBtn.style.display = 'inline';
  showStatus();

});
//create function that creates deck each time we start game
function createDeck() {
  //clear deck sfter game gameOver
  let deck = [];
  //use for lop to generate the cards and store in deck[];
  for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
    for (suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      //create card object;
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      //push to the createDeck from the card object
      deck.push(card);
    }
  }
  return deck;
}
//shuffle function

function shuffleDeck(deck)
{
  for(let i =0; i<deck.length; i++)
  {
    let swapIdx = Math.trunc(Math.random()*deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i] = tmp;
  }
}

//function to output object getCardString
function getCardString(card) {
  return card.value + ' of ' + card.suit;
}

//show status function
 function showStatus()
 {
   if(!gameStarted)
   {
     textArea.innerText="Welcome to Black-Jack Game";
     return;
   }
   for(var i = 0; i < deck.length; i ++)
   {
     textArea.innerText += '\n' + getCardString(deck[i]);
   }
 }

//function to  sg=huffle getCardString
function getNextCard() {
  return deck.shift();
}


//create arrays to hold the cards
let deck = createDeck();

//variable to hold players get nex cards.
let playerCards = [getNextCard(), getNextCard()];
//print Results
console.log("Welcome to Black-Jack Game");

console.log("you are dealt: ");
console.log(" " + getCardString(playerCards[0]));
console.log('' + getCardString(playerCards[1]));
