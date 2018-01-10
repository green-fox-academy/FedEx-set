let firstNumber = '1'; 
let secondNumber = '2';
let thirdNumber = '3';

let firstShape = 'A';
let secondShape = 'B';
let thirdShape = 'C';

let firstPattern = 'B';
let secondPattern = 'A';
let thirdPattern = 'B';

let firstColor = 'A';
let secondColor = 'A';
let thirdColor = 'A';

function cardChecker(x,y,z){
    if (numberChecker(x,y,z)){
        if (attributeChecker(firstShape, secondShape, thirdShape)){
            if (attributeChecker(firstPattern, secondPattern, thirdPattern)){
                if (attributeChecker(firstColor, secondColor, thirdColor)){
                    console.log('set')
                    // return true
                } else{
                    console.log('wrong color');
                }
            } else{
                console.log('wrong pattern');
            }
        } else{
            console.log('wrong shape');
        }
    }
};

function numberChecker(x, y, z){
    if (x === y && y === z || Number(x) + Number(y) + Number(z) === 6){
        return true
    }else{
        console.log('wrong number');
    }
};

function attributeChecker(x, y, z){
    if (x === y && y === z || x !== y && y !== z && x !== z){
        return true
    }
};

cardChecker(firstNumber, secondNumber, thirdNumber);