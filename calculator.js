function getAdd(num1, num2) {
    return num1 + num2;
}

function getSub(num1, num2) {
    return num1 - num2;
}

function getMul(num1, num2) {
    return num1*num2;
}

function getDiv(num1, num2) {
    return num1/num2;
}

function operate (input1, input2, operator){
    if (operator === "+"){
        return getAdd(input1, input2);    
    }
    if (operator === "-"){
        return getSub(input1, input2);    
    }
    if (operator === "*"){
        return getMul(input1, input2);    
    }
    if (operator === "/"){
        return getDiv(input1, input2);    
    }
}
let display = document.querySelector("#display"); //display is selected universally 

//button click events for key1
let numonekey = document.querySelector("#numonekey");
numonekey.addEventListener("click", ()=> display.textContent = 1);

//button click events key2
let numtwokey = document.querySelector("#numtwokey");
numtwokey.addEventListener("click", ()=> display.textContent = 2);
