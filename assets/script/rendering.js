'use strict'

function renderCards(cardCode) {
  cardCode.forEach(function (code) {
    let pattern = code.substr(code.length -3)
    
    console.log(pattern)
  });
};


function renderTable( card ) {
  let tableCards = document.querySelectorAll('.card');
  console.log(tableCards);
  tableCards.forEach(function (card){
    if (!card.innerHTML){
      console.log(card.id)
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

