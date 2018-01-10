'use strict';
let set = 0;

let firstNumber = '1'; 
let secondNumber = '2';
let thirdNumber = '3';

let firstShape = 'B';
let secondShape = 'B';
let thirdShape = 'C';

let firstPattern = 'B';
let secondPattern = 'A';
let thirdPattern = 'B';

let firstColor = 'A';
let secondColor = 'B';
let thirdColor = 'A';

function cardChecker(x,y,z){
    if (numberChecker(x,y,z)){
        if (attributeChecker(firstShape, secondShape, thirdShape, 'shape')){
            if (attributeChecker(firstPattern, secondPattern, thirdPattern, 'pattern')){
                if (attributeChecker(firstColor, secondColor, thirdColor, 'color')){
                    console.log(set)
                    // return true
                } 
            }
        }
    }
};

function numberChecker(x, y, z){
    if (x === y && y === z || Number(x) + Number(y) + Number(z) === 6){
        set ++;
        return true
    }else {
        console.log('wrong number');
        return true
    }
};

function attributeChecker(x, y, z, atribute){
    if (x === y && y === z || x !== y && y !== z && x !== z){
        set ++;
        return true
    } else {
        console.log('Wrong ' + atribute)
        return true
    }
};

cardChecker(firstNumber, secondNumber, thirdNumber);