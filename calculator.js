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
let displaypara = document.querySelector("#displaypara");

//button click events for key1
let numonekey = document.querySelector("#numonekey");
numonekey.addEventListener("click", ()=> displaypara.textContent += 1);

//button click events for key2
let numtwokey = document.querySelector("#numtwokey");
numtwokey.addEventListener("click", ()=> displaypara.textContent += 2);

//button click events for key3
let numthreekey = document.querySelector("#numthreekey");
numthreekey.addEventListener("click", ()=> displaypara.textContent += 3);

//button click events for key4
let numfourkey = document.querySelector("#numfourkey");
numfourkey.addEventListener("click", ()=> displaypara.textContent += 4);

//button click events for key5
let numfivekey = document.querySelector("#numfivekey");
numfivekey.addEventListener("click", ()=> displaypara.textContent += 5);

//button click events for key6
let numsixkey = document.querySelector("#numsixkey");
numsixkey.addEventListener("click", ()=> displaypara.textContent += 6);

//button click events for key7
let numsevenkey = document.querySelector("#numsevenkey");
numsevenkey.addEventListener("click", ()=> displaypara.textContent += 7);

//button click events for key8
let numeightkey = document.querySelector("#numeightkey");
numeightkey.addEventListener("click", ()=> displaypara.textContent += 8);

//button click events for key9
let numninekey = document.querySelector("#numninekey");
numninekey.addEventListener("click", ()=> displaypara.textContent += 9);

//button click events for key0
let numzerokey = document.querySelector("#numzerokey");
numzerokey.addEventListener("click", ()=> displaypara.textContent += 0);

//button click events for key00
let doublezerokey = document.querySelector("#double-zerokey");
doublezerokey.addEventListener("click", ()=> displaypara.textContent += "00");

//button click event for key del
let deldigitkey = document.querySelector("#deldigitkey");
deldigitkey.addEventListener("click", ()=> displaypara.textContent = "");//deletes one part of the calculation

//button click event for decimal key
let decimalkey = document.querySelector("#decimalkey");
decimalkey.addEventListener("click", ()=> displaypara.textContent += ".");



function appendNumber (number) {
    if (shouldResetDisplay) {
        displaypara.textContent = "";
        shouldResetDisplay = false;
    }
    if (displaypara.textContent === "0" && number !== ".") {
        displaypara.textContent = number;
    }
    else {
        displaypara.textContent +=number;
    }
}


let leftoperand = "" //declared in global scope
let operator = null;
let shouldResetDisplay = false;

function handleOperator(op) {
    if (leftoperand === "") {
        leftoperand = displaypara.textContent;
        operator = op;
        shouldResetDisplay = true; //flag was set to clear the display on next key press
    }

    else{// if the leftoperand isn't empty already
        let result = operate (parseFloat(leftoperand), parseFloat(displaypara.textContent), operator);
        displaypara.textContent = result;
        leftoperand = result;
        operator = op;
        shouldResetDisplay = true;
    }
}
//operator click event listeners and further actions



        let addkey = document.querySelector("#addkey");
        addkey.addEventListener("click", ()=> handleOperator("+"));
 
        let subtractkey = document.querySelector("#subtractkey");
        subtractkey.addEventListener("click", ()=> handleOperator("-"));

        let dividekey = document.querySelector("#dividekey");
        dividekey.addEventListener("click", ()=> handleOperator("/"));

        let multiplykey = document.querySelector("#multiplykey");
        multiplykey.addEventListener("click", ()=> handleOperator("*"));

        let percentkey = document.querySelector("#percentkey");
        percentkey.addEventListener("click", ()=> handleOperator("%"));