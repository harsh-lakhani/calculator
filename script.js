function operate () {
    document.getElementById("display").innerHTML = "";
    if (ops == "+") {add();}
    if (ops == "-") {subtract();}
    if (ops == "*") {multiply();}
    if (ops == "/") {divide();}
    console.log(result)
    document.getElementById("display").innerHTML = result;
    num1 = String(result);
    num2 = "";
    ops = "";
    result = "";
}

function add() {
    result = Number(num1)+Number(num2);
};

function subtract() {
    result = Number(num1)-Number(num2);
};

function multiply () {
    result = Number(num1)*Number(num2);
};

function divide () {
    result = Number(num1)/Number(num2);
};
var num1 = "";
var num2 = "";
var result = "";
function storeNumber(digit) {

    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + digit;
    if (ops == '') {
        num1 += digit;
    }
    else {
        num2 += digit;
    }
    console.log(num1 + ' // ' + num2);
}
var ops = "";
function storeOperator(operator1) {
    ops = operator1;
    document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + ops;
}


function clearIt(blank) {
    document.getElementById("display").innerHTML = blank;
    num1 = "";
    num2 = "";
    ops = "";
    result = "";
}

