/*----- constants -----*/
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const suits = ['Spade', 'Heart', 'Diamond', 'Club']
const deck = [];

/*----- app's state (variables) -----*/

let scores, winner;

/*----- cached element references -----*/

const pScoreEl = document.querySelector('#score1 div.score')
const cScoreEl = document.querySelector('#score2 div.score')

/*----- event listeners -----*/

/*----- functions -----*/

function createDeck() {
  values.forEach(function(value) {
    for(i=0; i<suits.length; i++) {
    deck.push(`${value}${suits[i]}`);
    }
})
  return deck;
}

function shuffleDeck() {
    let i = 0
    let idx = 0
    let temp = null

    for (i = deck.length - 1; i > 0; i--) {
        idx = Math.floor(Math.random() * (i + 1))
        temp = deck[i]
        deck[i] = deck[idx]
        deck[idx] = temp
    }
}

const render = function() {
    pScoreEl.textContent = scores.p;
    cScoreEl.textContent = scores.c;
}

const init = function() {
    scores = {
        p: 0,
        c: 0,
    };
    winner = null;

    render();
}

init()

createDeck();
shuffleDeck();
console.log(deck); 


//

//alert('Hello!');