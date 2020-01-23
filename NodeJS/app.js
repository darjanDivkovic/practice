let calculateSquare = function(number){
    return number * number;
}

let generateRandom = function(){
    return Math.floor(Math.random()*10);
}

console.log(calculateSquare(generateRandom()));