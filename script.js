import {randomOrder} from "./utils.js";

const cards = document.querySelectorAll('.card')
let firstCard = null
let secondCard = null
let lockBoard = false

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flipped')
  if (!firstCard) {
    firstCard = this
  } else {
    secondCard = this
    checkForMatch()
  }
}

function checkForMatch() {
  if (firstCard.dataset.card === secondCard.dataset.card) {
    disableCards()
    if (isGameFinished()) {
      setTimeout(() => {restartGame()}, 2500)
    }
  } else {
    unflipCards()
  }
}

function isGameFinished(){
  let finished = true
  for (let i = 0; i<cards.length; i++){
    if (! cards[i].classList.contains('flipped')){
      finished = false
      break
    }
  }
  return finished
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  resetBoard()
}

function unflipCards() {
  lockBoard = true
  setTimeout(() => {
    firstCard.classList.remove('flipped')
    secondCard.classList.remove('flipped')
    resetBoard()
  }, 1500)
}

function resetBoard() {
  lockBoard = false
  firstCard = null
  secondCard = null
}

function shuffleCards() {
  let order = randomOrder(12)

  cards.forEach((card, index) => {
    card.style.order = order[index]
  })
}

function restartGame() {
  lockBoard = true

  cards.forEach(card => {
    card.addEventListener('click', flipCard)
    card.classList.remove('flipped')
  })

  // wait for the end of the transition
  setTimeout(() => {
    shuffleCards()
    resetBoard()
  }, 1000)

}

restartGame()
