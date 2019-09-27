/*----- constants -----*/
const cardName = ["15_A", "2_r02", "3_r03", "4_r04", "5_r05", "6_r06", "7_r07", "8_r08", "9_r09", "10_r10", "12_J", "13_Q", "14_K"];
const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
const deck = [];


/*----- app's state (variables) -----*/

let scores, winner, playerDeck, computerDeck, gameStarted;
gameStarted=false;


/*----- cached element references -----*/
let playerCard = document.getElementById('player');
let computerCard = document.getElementById('computer');
const pScore = document.querySelector('#score1 div');
const cScore = document.querySelector('#score2 div');
const tscore = document.querySelector('#middle div.display');
const btnNG = document.getElementById('btnNG');
const btnPlay = document.getElementById('btnPlay');

/*----- functions -----*/

function Card(name, src, value) {
    this.name = name,
    this.src = src,
    this.value = value
}

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
btnNG.addEventListener('click', init);
btnPlay.addEventListener('click', play);


function play() {
    playerCard.src = playerDeck[0].src;
    computerCard.src = computerDeck[0].src;
    updateScore();
    render();
    playerDeck.shift();
    computerDeck.shift();
    getWinner();
}

function render() {
    pScore.textContent = scores.p;
    cScore.textContent = scores.c;
}

function init() {
    scores = {
        p: 0,
        c: 0,
    };
    winner = null;
    gameStarted = true;
    status();
    
    render();
}

function status() {
    if(gameStarted === false) {
        btnPlay.disabled = true; 
    }
    else {
        btnPlay.disabled = false;
    }
}

status();

function updateScore(){
let pcardValue = parseInt(playerDeck[0].value);
let ccardValue = parseInt(computerDeck[0].value);
    if(pcardValue > ccardValue) {
        scores.p++;
        display.textContent = '';
    }
    else if (ccardValue > pcardValue) {
         scores.c++;
         display.textContent = '';
     }
    else if(ccardValue === pcardValue) {
         display.textContent = 'War! Hit Play!';
     }
}

function getWinner() {
    if(scores.p === 10) {
        display.textContent = "Player Won!";
        gameStarted=false;
        status();
    } 
    else if (scores.c=== 10) { 
        display.textContent = "Computer Won!";
        gameStarted=false;
        status();
    }
}







