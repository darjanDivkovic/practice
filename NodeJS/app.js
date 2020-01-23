let doubleNumber = require('./myModule');

let calculateSquare = function(number){
    return number * number;
}

let generateRandom = function(){
    let generatedNumber = Math.floor(Math.random()*10);
    console.log(`I generated the number ${generatedNumber}`);
    return generatedNumber;
}

doubleNumber(generateRandom());