let screenNumber = document.getElementById("screen");

function writeNumber(n){
    screenNumber.textContent = screenNumber.textContent+n.toString();
}

for(let i = 0; i < 10; i++){
    document.getElementById(i.toString()).addEventListener("click", function(){
        writeNumber(i);
    });
}

let number1 = 0;
let number2 = 0;

let arrOperationSymbols = ["+", "-", "*", "/"];
let currentOperationNumber = 4;

for(let i = 0; i < arrOperationSymbols.length; i++){
    document.getElementById(arrOperationSymbols[i]).addEventListener("click", function(){
        nextNumber(i);
    });
};

function nextNumber(operationNumber){
    number1 = Number(screenNumber.textContent);
    screenNumber.textContent = "";
    currentOperationNumber = operationNumber;
}

function calc(){
    number2 = Number(screenNumber.textContent);
    let result = 0;
    switch(currentOperationNumber){
        case 0:
            result = number1 + number2;
            break;
        case 1:
            result = number1 - number2;
            break;
        case 2:
            result = number1 * number2;
            break;
        case 3:
            result = number1 / number2;
            break;
        default:
            number1 = number2;
            result = number1;
            break;
    };
    screenNumber.textContent = result;
    number1 = result;
    currentOperationNumber = 4;
};

document.getElementById("=").addEventListener("click", calc);

document.getElementById("AC").addEventListener("click", function(){
    screenNumber.textContent = "";
    number1 = 0;
    number2 = 0;
    currentOperationNumber = 4;
});

document.getElementById("back").addEventListener("click", function(){
    screenNumber.textContent = screenNumber.textContent.slice(0, -1);
});


document.getElementById(".").addEventListener("click", function(){
    if(screenNumber.textContent.indexOf(".") == -1){
        screenNumber.textContent = screenNumber.textContent + ".";
    }
});

console.log(Number(screenNumber.textContent));