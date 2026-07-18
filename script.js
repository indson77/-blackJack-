let cardsList = [];
let add = 0;
let hasBlackJack = false;
let isAlive = false;
let msg = "";
let message = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cardsEl = document.getElementById("cards");

let players = {
    name: "indson",
    chip : 145
}

let playerRec = document.getElementById("player")
playerRec.innerText = players.name + " : $" + players.chip

function getRandomCard() {
    let number = Math.floor(Math.random() * 13) + 1;

    if (number === 1) {
        return 11;
    } else if (number > 10) {
        return 10;
    } else {
        return number;
    }
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    cardsList = [firstCard, secondCard];
    add = firstCard + secondCard;

    renderGame();
}

function renderGame() {
    sumEl.textContent = "Sum: " + add;

    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cardsList.length; i++) {
        cardsEl.textContent += cardsList[i] + " ";
    }

    if (add < 21) {
        msg = "Do you want to draw a new card?";
    } else if (add === 21) {
        msg = "Woohoo! You got Blackjack!";
        hasBlackJack = true;
    } else {
        msg = "You are out of the game!";
        isAlive = false;
    }

    message.textContent = msg;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = getRandomCard();
        cardsList.push(newCard);
        add += newCard;

        if (isAlive == true && hasBlackJack == false) {
            renderGame()
        }
        else {
            message.textContent = "You are out of yhe game :("
        }
    }
}
