const cardArray = [
    {
        name: 'fries',
        img: 'assets/fries.png'
    },
    {
        name: 'fries',
        img: 'assets/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'assets/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'assets/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'assets/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'assets/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'assets/milkshake.png'
    },
    {
        name: 'milkshake',
        img: 'assets/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'assets/pizza.png'
    },
    {
        name: 'pizza',
        img: 'assets/pizza.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const result = document.getElementById('result')
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', './assets/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
        
    }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', './assets/white.png')
        cards[optionTwoId].setAttribute('src', './assets/white.png')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', './assets/blank.png')
        cards[optionTwoId].setAttribute('src', './assets/blank.png')
        alert('Sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    result.textContent = cardsWon.length
    if (cardsWon === cardArray.length/2) {
        result.textContent = 'Congrats you have won'
    }
}

function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}
createBoard();