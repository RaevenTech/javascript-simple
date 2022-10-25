let cardCount = 0;
let cards = [];

let hasBlackjack = false;
let isPlayerActive = false;

let message = "";
const messageEl = document.getElementById("message_el");
const countEl = document.querySelector("#count_el");
const cardsEl = document.getElementById("cards_el");

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10;
    } else {
        return randomCard;
    }
}

//function to start a new game btn
function startGame() {
    isPlayerActive = true;
    let card1 = getRandomCard();
    let card2 = getRandomCard();
    cardCount = card1 + card2;
    cards = [card1, card2];
    console.log(cardCount);

    renderGame();
}

// functionn that controle the game rendering between lines 23-43
function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];
    }
    // here he cards  comined total is shown
    countEl.textContent = "Count: " + cardCount;

    if (cardCount <= 20) {
        message = "Do you want to draw another card?";
        isPlayerActive = true;
    } else if (cardCount === 21) {
        message = "Blackjack!! YOU WIN!!";
        hasBlackjack = true;
    } else {
        message = "BUST! You are out of the game!";
        isPlayerActive = false;
    }
    messageEl.textContent = message;
}

// function for drawing a new random card Btn
function newCard() {
    if (isPlayerActive === true && hasBlackjack === false) {
        let card = getRandomCard();
        cardCount += card;
        cards.push(card);
        renderGame();
    }
}
