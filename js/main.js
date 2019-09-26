/*----- constants -----*/
// const cardName = ["A", "r02", "r03", "r04", "r05", "r06", "r07", "r08", "r09", "r10", "J", "Q", "K"]
const cardName = ["15_A", "2_r02", "3_r03", "4_r04", "5_r05", "6_r06", "7_r07", "8_r08", "9_r09", "10_r10", "12_J", "13_Q", "14_K"]

const suits = ['spades', 'hearts', 'diamonds', 'clubs']
const deck = [];
let playerCard = document.getElementById('player');
let computerCard = document.getElementById('computer');

/*----- app's state (variables) -----*/

let scores, winner, playerDeck, computerDeck;
playerDeck=[];
computerDeck=[]


/*----- cached element references -----*/

const pScore = document.querySelector('#score1 div.score');
const cScore = document.querySelector('#score2 div.score');
//const btn = document.getElementById('buttonPlay');

/*----- functions -----*/

// function createDeck() {
//   values.forEach(function(value) {
//     for(i=0; i<suits.length; i++) {
//     deck.push(`${value}_${suits[i]}`);
//     }
// })
//   return deck;
// }

function Card(name, src, value) {
    this.name = name,
    this.src - src,
    this.value = value
}

// function createDeck() {
//     suits.forEach(function (entry) {
//         cardName.forEach(function(item) {
//             obj = new Card();
//             obj.name = `${entry}-${item}`;
//             obj.src = 'images/'+entry+'/'+obj.name+".svg";
//             obj.class = `.card.${entry}.${item}`;
//             deck.push(obj)
//         })
//     });
//     return deck;
// };

function createDeck() {
    suits.forEach(function (entry) {
        cardName.forEach(function(item) {
            let charPos=item.indexOf("_") 
            obj = new Card();
            obj.name = `${entry}-${item.slice(charPos+1, item.length)}`;
            obj.value=`${item.slice(0, charPos)}`;
            obj.src = 'images/'+entry+'/'+obj.name+".svg";
            obj.class = `.card.${entry}.${item}`;
            deck.push(obj)
        })
    });
    return deck;
};

function shuffleDeck() {
    for (let i = 0; i < deck.length; i++) {
        let idx = Math.floor(Math.random() * deck.length);
        let temp = deck[i]
        deck[i] = deck[idx]
        deck[idx] = temp
    }
}
createDeck();
shuffleDeck();
    playerDeck = deck.slice(0, 26);
    computerDeck = deck.slice(26, 52);

/*----- event listeners -----*/
//document.getElementById('btnNG').addEventListener('click', dealCard);
document.getElementById('btnPlay').addEventListener('click', play);


function play() {
    playerCard.src = playerDeck[0].src;
    playerDeck.shift();
    computerCard.src = computerDeck[0].src;
    computerDeck.shift();
    console.log(playerDeck[0]);
    console.log(computerDeck[0])
}
console.log(computerDeck)
//function play() {
    // let newPlayerDeck = playerDeck;
    // let newComputerDeck = computerDeck;
    // let newPlayerCard = newPlayerDeck.slice();
    // let newComputerCard = newComputerDeck.slice();
    // playerCard.src = newPlayerCard.src;
    // computerCard.src = newComputerCard.src;
    // playerCard.src = playerDeck[1].src;
    // computerCard.src = computerDeck[1].src;
//}

const render = function() {
    pScore.textContent = scores.p;
    cScore.textContent = scores.c;
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



//dealCard();








//

//alert('Hello!');