'use strict'

function renderCards(cardCode, callback) {
  console.log(cardCode)
  cardCode.forEach(function (code) {
    let i = 0
    let patternNumber = code.length[0]
    let pattern = code.substr(code.length -3)
    let cardPattern = `<img src='../images/${pattern}.png' alt>`
    let cardElement = `<div class="card" id="${i}">${cardPattern * patternNumber}</div>`
    i++
    renderTable(cardElement)
  });
};

function renderTable( renderedCard ) {
  let tableCards = document.querySelectorAll('.card');
  console.log(tableCards);
  tableCards.forEach(function (card){
    if (!card.innerHTML){
      console.log(card.id)
      card.innerHTML = `<div>${renderedCard}</div>`
    } else {
      console.log('van innerHTML')
    }
  })
};

// renderTable();

let cards = []

let createCards = function(callback) {
    let shapes = ['d', 'w', 'c']
    let pattern = ['e', 'f', 's']
    let color = ['r', 'g', 'b']
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            for (let l = 0; l < 3; l++){
                let card = i+1 + shapes[i] + pattern[j] + color[l]
                cards.push(card)
            }
        }
    }
    callback(cards)
}

createCards(renderCards)

