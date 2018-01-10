'use strict'

function renderCards(cardCode) {
  console.log(cardCode)
    cardCode.forEach(function (code) {
    let patternNumber = code[0]
    let i = 0
    let pattern = code.substr(code.length -3)
    // console.log(pattern)
    let cardContent = `<div class="content"><img src="assets/images/${pattern}.png" alt=""></div>`
    // let cardPattern = `<img src='../images/${pattern}.png' alt>`.repeat(patternNumber)
    let cardElement = document.createElement('div')
    cardElement.setAttribute('class', 'card')
    cardElement.setAttribute('id', i)
    cardElement.innerHTML = cardContent
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
    for (let anna = 0; anna < 3; anna++){
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++){
                for (let k = 0; k < 3; k++){
                    let card = shapes[i] + pattern[j] + color[k]
                    cards.push(card)
                }
            }
        }
    }
        
    for (let l = 0; l < cards.length * 3; l++){
        if ( l < 28){
            cards[l] = 1 + cards[l]
        } else if ( l < 54){
            cards[l] = 2 + cards[l]
        } else if ( l < 81){
            cards[l] = 3 + cards[l]
        }
    }
    callback(cards)
}
createCards(renderCards)
