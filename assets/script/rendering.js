'use strict'

function renderCards(cardCode) {
  cardCode.forEach(function (code) {
    let patternNumber = code[0]
    let i = 0
    let pattern = code.substr(code.length -3)
    let cardContent = document.createElement ('div')
    cardContent.setAttribute('class', 'content')
    let cardPattern = document.createElement('img')
    cardPattern.setAttribute('src', 'assets/images/'+ pattern + '.png')
    cardContent.appendChild(cardPattern)
    for (let n = 0; n < parseInt(patternNumber) - 1; n++) {
      let cardPattern2 = cardPattern.cloneNode(true)
      cardContent.appendChild(cardPattern2)
    }
    let cardElement = document.createElement('div')
    cardElement.setAttribute('class', 'card')
    cardElement.setAttribute('id', code)
    cardElement.appendChild(cardContent)
    let tableContainer = document.querySelectorAll('.card-container')[0];
    tableContainer.appendChild(cardElement)
    i++
    
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
      
      
      createCards(getCards)
      
      function getCards(cards){
        let table = [];
        for (let i = 1; i <= 12; i++){
          let cardOnTable = Math.floor(Math.random() * cards.length);
          table.push(cards[cardOnTable]);
          cards.splice(cardOnTable, 1);
        }
        console.log(cards.length);    
        renderCards(table);
      }
      