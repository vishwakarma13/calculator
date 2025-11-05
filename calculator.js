function getAdd(num1, num2) {return num1 + num2;}
function getSub(num1, num2) {return num1 - num2;}
function getMul(num1, num2) {return num1 * num2;}
function getDiv(num1, num2) {return num1 / num2;}

function operate (input1, input2, operator){
    if (operator === "+"){return getAdd(input1, input2);}
    if (operator === "-"){return getSub(input1, input2);}
    if (operator === "*"){return getMul(input1, input2);}
    if (operator === "/"){return getDiv(input1, input2);}
}
let displaypara = document.querySelector("#displaypara"); //displaypara is selected globally

let numonekey = document.querySelector("#numonekey");
numonekey.addEventListener("click", ()=> appendNumber("1"));

let numtwokey = document.querySelector("#numtwokey");
numtwokey.addEventListener("click", ()=> appendNumber("2"));

let numthreekey = document.querySelector("#numthreekey");
numthreekey.addEventListener("click", ()=> appendNumber("3"));

let numfourkey = document.querySelector("#numfourkey");
numfourkey.addEventListener("click", ()=> appendNumber("4"));

let numfivekey = document.querySelector("#numfivekey");
numfivekey.addEventListener("click", ()=> appendNumber("5"));

let numsixkey = document.querySelector("#numsixkey");
numsixkey.addEventListener("click", ()=> appendNumber("6"));

let numsevenkey = document.querySelector("#numsevenkey");
numsevenkey.addEventListener("click", ()=> appendNumber("7"));

let numeightkey = document.querySelector("#numeightkey");
numeightkey.addEventListener("click", ()=> appendNumber("8"));

let numninekey = document.querySelector("#numninekey");
numninekey.addEventListener("click", ()=> appendNumber("9"));

let numzerokey = document.querySelector("#numzerokey");
numzerokey.addEventListener("click", ()=> appendNumber("0"));

let doublezerokey = document.querySelector("#double-zerokey");
doublezerokey.addEventListener("click", ()=> appendNumber("00")); 

let decimalkey = document.querySelector("#decimalkey");
decimalkey.addEventListener("click", ()=> appendNumber("."));

function appendNumber (number) {
    if (shouldResetDisplay) {
        displaypara.textContent = "";
        shouldResetDisplay = false;}

    if (displaypara.textContent === "0" && number !== ".") {displaypara.textContent = number;}
    else {displaypara.textContent +=number;}}

let leftoperand = "" //declared in global scope
let rightoperand = "";
let finalresult = "";
let operator = null;
let shouldResetDisplay = false;

function handleOperator(op) {
    if (leftoperand === "") {
        leftoperand = displaypara.textContent;
        operator = op;
        shouldResetDisplay = true;}

    else {// if the leftoperand isn't empty already
        let result = operate (parseFloat(leftoperand), parseFloat(displaypara.textContent), operator);
        displaypara.textContent = result;
        leftoperand = result;
        operator = op;
        shouldResetDisplay = true;}}

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

        let deldigitkey = document.querySelector("#deldigitkey");
        deldigitkey.addEventListener("click", ()=> displaypara.textContent = "");//deletes one operand of the calculation for entering it again

        let allclearkey = document.querySelector("#allclearkey");
        allclearkey.addEventListener("click", ()=> {
            leftoperand = "";
            rightoperand = "";
            finalresult = "";
            operator = null;
            shouldResetDisplay = false;
            displaypara.textContent = "";
        });


//result calculation on pressing the = button

let equalkey = document.querySelector("#equalkey");
equalkey.addEventListener("click", ()=> {

    if (operator === null) return;

    rightoperand = displaypara.textContent;
    finalresult = operate(parseFloat(leftoperand), parseFloat(rightoperand), operator);
    displaypara.textContent = finalresult;

    leftoperand = "";
    operator = null;
    shouldResetDisplay = true;
})