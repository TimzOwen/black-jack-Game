/*
blackjack game of guess
by Owen
*/
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
  'Nine', 'Eight', 'Seven', '', 'Five', 'Four',
  'Three', 'Two', 'One'
];//this is just a random selectionof colored cards


//DOM variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four',
 'Three', 'Two', 'One'
];


//DOM variables
let    paraa = document.getElementById('para'),
    newgamee = document.getElementById('newGame-btn'),
     hitt = document.getElementById('hit-btn'),
    stayy = document.getElementById('stay-btn');

//Game variables
 let  gameStarted = false,
   gameOver = false,
   playerWon = false,
   dealerCards = [],
   playerCards =[],
   dealerScore = 0,
   playerScore =0,




stayy.style.display = 'none';
hitt.style.display = 'none';
showStatus();

newgamee.addEventListener('click', function()
{
  gameStarted = true;
  gameover =false;
  playerwon = fase;

  deck = createDeck();// check oj the values of BOM
  shuffleDeck(deck);

  dealerCards =[getNextCard(), getNextCard()];
  playerCards =[getNextCard(), getNextCard()];


  newgamee.style.display = 'none';
  hitt.style.display = 'inline';
  stayy.style.display = 'inline';
  showStatus();
});

function createDeck() {
 let deck = [];

 for (let suitidx = 0; suitidx < suits.length; suitidx++)
 {
   for (let valueidx = 0; valueidx < values.length; valueidx++) 
   {
     let card = 
         {
       suit: suits[suitidx],
       value: values[valueidx]
     };

     deck.push(card);
   }
 }
 return deck;
}variables

function getCardString(card) {
 return card.suit + ' of ' + card.value;
}

function getNextCard() {
 return deck.shift();
}

let deck = createDeck();

let playerCards = [getNextCard(), getNextCard()];

console.log("You are dealt");

console.log("Welcome to balck");

console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1]));

function showStatus()
{
 if(!gameStarted)
 {
   paraa.innerText="Welcome to  Black Jack ooh";
   return;
 }
}

let dealerCardString = '';
 for(let i=0; i<dealerCards.legth; i++)
 {
   dealerCardString += getCardString(dealerCards[i]) + '\n';
 }

 let playerCardString = '';
 for(let i=0; i<playerCards.legth; i++)
 {
   playerCardString += getCardString(playerCards[i]) + '\n';
 }

   updateScores();

   paraa.innerText=

     'dealer has: \n' +
     dealerCardString +
     '(score: ' + dealerScore + ') \n\n';

     'player has: \n' +
     playerCardString +
     '(score: ' + playerScore + ') \n\n';

function shuffleDeck(deck)
{
    for(let i = 0; i<deck.length(); i++)
    {
      let swapIdx = Math.trunc(Math.random()* deck.length);
      let tmp = deck[swapIdx];
      deck[swapIdx] = deck[i];
      deck[i]=tmp;
    }

 for (var i = 0; i<deck.length; i++)
 {
   paraa.innerText += '\n' + getCardString(deck[i]);
 }
}
