let button = document.getElementById('b');
let quoteContainer = document.getElementById('quoteContainer');

let quotes = [
    'Be yourself, everyone else is already taken.',
    'Two things are infinite: the universe and human stupidity; and Im not sure about the universe',
    'So many books, so little time',
    'A room without books is like a body without a soul.',
    'You know youre in love when you cant fall asleep because reality is finally better than your dreams.'

];

button.addEventListener('click', displayQuote);

function displayQuote(){
    // Create a node
    let random = Math.floor(Math.random()*quotes.length);
   
    let p = document.createElement("p");
    let pText = document.createTextNode(quotes[random]);

    p.appendChild(pText);

    quoteContainer.appendChild(p);
}