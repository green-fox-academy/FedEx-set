'use strict'

function renderCards(cardCode) {
  // console.log(cardCode)
  cardCode.forEach(function (code) {
    let i = 0;
    let patternNumber = code[0];
    let pattern = code.substr(code.length -3);
    let cardPattern = document.createElement('img');
    // cardPattern.setAttribute()
    // ${cardPattern.repeat(patternNumber)}
    // let cardPattern = document.createElement('img')
    // cardPattern.setAttribute('img', 'src="assets/images/.png" alt="">')
    // let cardPattern = `<img src="assets/images/${pattern}.png" alt="">`
    // let cardContent = document.createElement('div')
    // cardContent.setAttribute('div', 'content')
    // cardContent.innerText = cardPattern
    let cardElement = document.createElement('div')
    cardElement.innerText = cardPattern
    cardElement.setAttribute('class', 'card')
    cardElement.setAttribute('id', i)
    // renderTable(cardElement)
    let tableContainer = document.querySelectorAll('.card-container')[0];
    // console.log(renderedCard);
    i++;  
    tableContainer.appendChild(cardElement);
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
    console.log(cards)
    callback(cards)
}
createCards(renderCards)
