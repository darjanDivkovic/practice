let button = document.getElementById('calculateButton');

button.addEventListener('click', calculateInterest);

function calculateInterest(){

    

    let principal = parseInt(document.getElementById('principal').value);
    let years = parseInt(document.getElementById('years').value);
    let rateOfInteres = parseInt(document.getElementById('rateOfInterest').value);
    


    let result = (principal * years * rateOfInteres) / 100;

    resultNode = document.createTextNode(result)

    document.getElementById('resultSpan').appendChild(resultNode);
    
}