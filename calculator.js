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