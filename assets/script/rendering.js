'use strict'

function renderCards(cardCode) {
  console.log(cardCode)
    cardCode.forEach(function (code) {
    let patternNumber = code[0]
    let i = 0
    // let patternNumber = code.length[0]
    let pattern = code.substr(code.length -3)
    // console.log(pattern)
    let cardContent = `<div class="card" id="1"></div>`
    let cardPattern = `<img src='../images/${pattern}.png' alt>`
    let cardElement = document.createElement('div')
    cardElement.setAttribute('class', 'card')
    cardElement.setAttribute('id', i)
    // `<div class="card" id="${i}">${cardPattern}</div>`
    // cardElement.innerHTML = cardPattern
    let tableContainer = document.querySelectorAll('.card-container')[0];
    tableContainer.appendChild(cardElement)
    i++
    // renderTable(cardElement)
  });
};

function renderTable( renderedCard ) {
  let tableContainer = document.querySelectorAll('.card-container')[0];
  console.log(renderedCard)
  tableContainer.appendChild(renderedCard)
  }
  // tableCards.forEach(function (card){
  //   if (!card.innerHTML){
  //     console.log(card.id)
  //     card.innerHTML = `<div>${renderedCard}</div>`
  //   } else {
  //     console.log('van innerHTML')
  //   }
  // })

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

