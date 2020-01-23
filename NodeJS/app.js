/*
let myModule = require('./myModule');

let calculateSquare = function(number){
    return number * number;
}

let generateRandom = function(){
    let generatedNumber = Math.floor(Math.random()*10);
    console.log(`I generated the number ${generatedNumber}`);
    return generatedNumber;
}

// myModule.doubleNumber(generateRandom());

myModule.makeNumberPretty(generateRandom());
*/

let events = require('events');

let emmiter = new events.EventEmitter();

/*

emmiter.on('nekoPoslaoPoruku', ()=> {
    console.log("Imate novu poruku!");
});

emmiter.emit('nekoPoslaoPoruku');

*/

emmiter.on('ucitajPoruku', (message) => {
    console.log(message);
}); 

emmiter.emit('ucitajPoruku', 'Dje si brate');