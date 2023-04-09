// Array of Deck of Card Images
const deckCards = [
    "1.jpg",
    "1.jpg",
    "2.jpg",
    "2.jpg",
    "3.jpg",
    "3.jpg",
    "4.jpg",
    "4.jpg",
    "5.jpg",
    "5.jpg",
    "6.jpg",
    "6.jpg",
    "7.jpg",
    "7.jpg",
    "8.jpg",
    "8.jpg",
];

// Global Arrays
const deck = document.querySelector(".deck");
const playGame = document.querySelector("#memoryStart");
const playContinute = document.querySelector(".playContinute");
const playAgain = document.querySelector(".playAgain");
const startMemoryGame = document.querySelector("#startMemoryGame");

//startMemoryGame
var isGame = true;

let opened = [];
let matched = [];
let isPlay = false;

const timeCounter = document.querySelector(".memory-count__value");
let seconds = 300;

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function startGame() {
    const shuffledDeck = shuffle(deckCards);
    for (let i = 0; i < shuffledDeck.length; i++) {
        const liTag = document.createElement('LI');
        liTag.classList.add('card-memory');
        const addImage = document.createElement("IMG");
        liTag.appendChild(addImage);
        addImage.setAttribute("src", "images/booth/suc-khoe-toan-dien/game/" + shuffledDeck[i] + "?raw=true");
        addImage.setAttribute("alt", "pic");
        deck.appendChild(liTag);
    }
}

function removeCard() {
    while (deck.hasChildNodes()) {
        deck.removeChild(deck.firstChild);
    }
}

function timer() {
    time = setInterval(function () {
        seconds--;
        if (seconds >= 0) {

            var min = Math.floor(seconds / 60);
            var second = seconds % 60;

            min = min >= 0 ? min : 0;
            second = second >= 0 ? second : 0;

            var minText = min < 10 ? '0' + min : min;
            var minSecond = second < 10 ? '0' + second : second;
            timeCounter.innerHTML = `${minText}:${minSecond}`;

        } else {
            winGame();
        }
    }, 1000);
}

function stopTime() {
    clearInterval(time);
}

function resetGame() {
    stopTime();
    isPlay = false;
    seconds = 300;
    timeCounter.innerHTML = '05:00';
    deck.innerHTML = '';
    matched = [];
    opened = [];
    startGame();
}

function compareTwo() {
    if (opened.length === 2) {
        document.body.style.pointerEvents = "none";
    }
    if (opened.length === 2 && opened[0].src === opened[1].src) {
        match();
    } else if (opened.length === 2 && opened[0].src != opened[1].src) {
        noMatch();
    }
}

function match() {
    setTimeout(function () {
        opened[0].parentElement.classList.add("match");
        opened[1].parentElement.classList.add("match");
        matched.push(...opened);
        document.body.style.pointerEvents = "auto";
        winGame();
        opened = [];
    }, 600);
}

function noMatch() {
    setTimeout(function () {
        opened[0].parentElement.classList.remove("flip");
        opened[1].parentElement.classList.remove("flip");
        document.body.style.pointerEvents = "auto";
        opened = [];
    }, 3000);
}

function winGame() {
    if (matched.length === 16) {
        stopTime();
        openPopup('.win-game');
        isGame = false;
    } else {
        if (seconds <= 0) {
            isGame = false;
            stopTime();
            openPopup('.lost-game');
        }
    }
}

deck.addEventListener("click", function (evt) {

    if (isGame) {
        if (evt.target.nodeName === "LI") {
            if (!isPlay) {
                isPlay = true;
                timer();
            }
            flipCard();
        }

        function flipCard() {
            evt.target.classList.add("flip");
            addToOpened();
        }

        function addToOpened() {
            if (opened.length === 0 || opened.length === 1) {
                opened.push(evt.target.firstElementChild);
            }
            compareTwo();
        }

    }

});

startGame();

playGame.addEventListener("click", function () {
    openPopup('.popup-game__health');
    scrollBox('.popup-game__health');
});

startMemoryGame.addEventListener("click", function () {
    document.querySelector('.memory').classList.add('playing-game');
    isGame = true;
    closePopup();
});

playContinute.addEventListener("click", function () {
    isGame = true;
    closePopup();
    resetGame();
});

playAgain.addEventListener("click", function () {
    isGame = true;
    closePopup();
    resetGame();
});
