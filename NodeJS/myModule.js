let doubleNumber = function(number){
    console.log(`Number after doubling ${number * 2}`);
}

let makeNumberPretty = function(number){
    console.log(`Here i made it pretty -> **${number}**`);
}

module.exports.doubleNumber = doubleNumber;
module.exports.makeNumberPretty = makeNumberPretty;