'use strict'

// import cardChecker from 'game_logic';

let selectCounter = 0;

function renderCards(cardCode) {
  cardCode.forEach(function (code) {
    let patternNumber = code[0]
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
    let oneCard = document.getElementById(code)
    oneCard.addEventListener('click', function(event){
      clickAction(oneCard)
    })
    const newgame = document.querySelector('.new-game').addEventListener('click', function(event){
      location.reload();
    })
  });
};

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
  for (let i = 0; i < 12; i++){
    let cardOnTable = Math.floor(Math.random() * cards.length);
    table.push(cards[cardOnTable]);
    cards.splice(cardOnTable, 1);
  }
  renderCards(table);
}
console.log(cards.length);   
let cardCounter = document.querySelector('#card-counter');
cardCounter.textContent = cards.length;

function cardChanger(){
  let newCards = [];
  for (let i = 1; i <= 3; i++){
    let newCard = Math.floor(Math.random() * cards.length);
    newCards.push(cards[newCard]);
    cards.splice(newCard, 1);
  };
  let selectedCards = document.querySelectorAll('.selected');
  for (let j = 0; j < 3; j++){
    selectedCards[j].innerHTML = ''
    selectedCards[j].setAttribute('id', newCards[j])
    let patternNumber = newCards[j][0]
    console.log(newCards[j])
    let pattern = newCards[j].substr(newCards[j].length -3)
    let cardContent = document.createElement ('div')
    cardContent.setAttribute('class', 'content')
    let cardPattern = document.createElement('img')
    cardPattern.setAttribute('src', 'assets/images/'+ pattern + '.png')
    cardContent.appendChild(cardPattern)
    for (let n = 0; n < parseInt(patternNumber) - 1; n++) {
      let cardPattern2 = cardPattern.cloneNode(true)
      cardContent.appendChild(cardPattern2)
    }
    selectedCards[j].appendChild(cardContent)
    selectedCards[j].setAttribute('class', 'card')
    console.log(cards.length)
  }
};

  function clickAction(card){
    
    
    if (card.getAttribute('class') === 'card' && selectThree.length < 3){
      card.setAttribute('class', 'card selected')
      selectThree.push(card)
      console.log(selectThree)
      if (selectThree.length === 3){
        errorLine.textContent = "";
       setChecker(selectThree);
       let listOfSelected = document.querySelectorAll('.selected');
       listOfSelected.forEach(function(element){
        element.setAttribute('class', 'card')
      })
      selectThree = []
      }
        // card.setAttribute('class', 'card')
    } else if (card.getAttribute('class') === 'card selected') {
      card.setAttribute('class', 'card')
      selectThree.pop(card)
    } else if (selectThree.length > 3) {
      // console.log(selectThree)
    }
  }
  
  let selectThree = [];
  
  function setChecker(selectThree){
    selectThree.forEach(function (e){
      console.log(e.id)
    })
    firstNumber = selectThree[0].id[0]
    secondNumber = selectThree[1].id[0]
    thirdNumber = selectThree[2].id[0]
    
    firstShape = selectThree[0].id[1]
    secondShape = selectThree[1].id[1]
    thirdShape = selectThree[2].id[1]
    
    firstPattern = selectThree[0].id[2]
    secondPattern = selectThree[1].id[2]
    thirdPattern = selectThree[2].id[2]
    
    firstColor = selectThree[0].id[3]
    secondColor = selectThree[1].id[3]
    thirdColor = selectThree[2].id[3]
    
    cardChecker(firstNumber, secondNumber, thirdNumber)
}


function renderError(attribute) {  
  console.log("EZ AZ: " + attribute)
  
    errorLine.textContent += " " + attribute;
  
  
}
const errorLine = document.querySelector('.log');
