// Coding challenge part 5
let product = {
    category: "electronic",
    price: 50
};

function discount(oldPrice){
    return oldPrice - ( 0.1 * oldPrice );
}

if ( product.category === "electronic" || product.price > 100 ){
    alert("You have been offered a discount");
    alert(`OLD PRICE : ${product.price}`);
    alert(`NEW PRICE : ${discount(product.price)}`);
}
else {
    alert("No discounts are available.");
}