'use strict'

let cards = []

let createCards = function() {
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
    return cards
}

createCards()