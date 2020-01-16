// Coding challenge part 10

let movie = {
    name: "The pirates of the Caribean!",
    rating: 3
}

function comment(movie){

    alert(`I just watched ${movie.name}!`);

    switch(movie.rating){
        case 0 : 
            alert("This joint sucks...");
        break;

        case 1 : 
            alert("Have seen better than this");
        break;

        case 2 : 
            alert("Its k.");
        break;

        case 3 : 
            alert("not good, not bad");
        break;

        case 4 :
            alert("This is a good movie!");
        break;

        case 5 :
            alert("My new favourite movie y'all.");
        break;
    }
};

comment(movie);