'use strict'

function renderCards( cardCode ) {
  let card = 
  cardCode.forEach(function (code) {
    code.split('1' || '2' || '3');
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

renderTable();