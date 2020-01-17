// Regular expressions

let a = 200;
let b = 0;

try {
    if(b === 0){
        throw("B je nula...")
    }
    else {
        alert(a/b);
    }
}
catch(error){
    alert(error);
}
finally{
    alert("eto ga!");
}




