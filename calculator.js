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

//button click events for key2
let numtwokey = document.querySelector("#numtwokey");
numtwokey.addEventListener("click", ()=> display.textContent = 2);

//button click events for key3
let numthreekey = document.querySelector("#numthreekey");
numthreekey.addEventListener("click", ()=> display.textContent = 3);

//button click events for key4
let numfourkey = document.querySelector("#numfourkey");
numfourkey.addEventListener("click", ()=> display.textContent = 4);

//button click events for key5
let numfivekey = document.querySelector("#numfivekey");
numfivekey.addEventListener("click", ()=> display.textContent = 5);

//button click events for key6
let numsixkey = document.querySelector("#numsixkey");
numsixkey.addEventListener("click", ()=> display.textContent = 6);

//button click events for key7
let numsevenkey = document.querySelector("#numsevenkey");
numsevenkey.addEventListener("click", ()=> display.textContent = 7);

//button click events for key8
let numeightkey = document.querySelector("#numeightkey");
numeightkey.addEventListener("click", ()=> display.textContent = 8);

//button click events for key9
let numninekey = document.querySelector("#numninekey");
numninekey.addEventListener("click", ()=> display.textContent = 9);

//button click events for key0
let numzerokey = document.querySelector("#numzerokey");
numzerokey.addEventListener("click", ()=> display.textContent = 0);
