//black-jack game by
//Owen Timz
//create variable and output

//loop between arrays
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
  'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four',
  'Three', 'Two', 'One'
];


//variales to access the UI
let textArea = document.getElementById('txtArea');
let hitBtn = document.getElementById('hitGame');
let stayBtn = document.getElementById('stayGame');
let newGametn = document.getElementById('newGame');

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
      //create card object;
      let card =
      {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      //push to the createDeck from the card object
      deck.push(card);
    }
  }
  return deck;
}
//function to output object getCardString
function getCardString(card)
{
  return card.value + ' of ' + card.suit;
}
//function to  sg=huffle getCardString
function getNextCard()
{//black-jack game by
//Owen Timz
//create variable and output

//loop between arrays
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
  'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four',
  'Three', 'Two', 'One'
];


//variales to access the UI
let textArea = document.getElementById('txtArea');
let hitBtn = document.getElementById('hitGame');
let stayBtn = document.getElementById('stayGame');
let newGameBtn = document.getElementById('newGame');

//hide buttons before game start
hitBtn.style.display= 'none';
stayBtn.style.display= 'none';

//add action an listener to the new game btn

  newGameBtn.addEventListener('click', function()
  {
    textArea.innerText = 'game started...';
    newGameBtn.style.display = 'none';
    hitBtn.style.display = 'inline';
    stayBtn.style.display = 'inline';
  });
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
      //create card object;
      let card =
      {
        suit: suits[suitIdx],
        value: values[valueIdx]
      };
      //push to the createDeck from the card object
      deck.push(card);
    }
  }
  return deck;
}
//function to output object getCardString
function getCardString(card)
{
  return card.value + ' of ' + card.suit;
}
//function to  sg=huffle getCardString
function getNextCard()
{
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
console.log( '' + getCardString(playerCards[1]));

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
console.log( '' + getCardString(playerCards[1]));
