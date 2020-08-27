// number pressed -> display number 
// operator pressed -> display operator

const displayWindow = document.getElementById("res")
const displayNumOperator = (input) => {
    let currentDisplay = displayWindow.innerText;
    console.log(currentDisplay)
    // check if operator alreay exist in the input
    const regex = /[+-\/\*]/
    if (regex.test(currentDisplay) && regex.test(input)) {
        console.log(`Operator Already Exists!!!`)
    } else {
        displayWindow.innerText = currentDisplay + input
    }
}

const deleteChar = () => {
    let currentDisplay = displayWindow.innerText;
    displayWindow.innerText = currentDisplay.slice(0, -1)
}


const sanitizeInput = () => {
    const input = displayWindow.innerText;
    const regex = /^(\d+)([+-\/\*])(\d+)$/;
    let result = input.match(regex)
    const operand1 = result[1]
    const operator = result[2]
    const operand2 = result[3]

    return calculate(operand1, operator, operand2)

}

const calculate = (operand1, operator, operand2) => {
    console.log(operand1)
    console.log(operator)
    console.log(operand2)

    const a = parseInt(operand1, 2)
    const b = parseInt(operand2, 2)
    let result = 0;

    if (operator == '+') {
        result = a + b;
    } else if (operator == '-') {
        result = a - b
    } else if (operator == '*') {
        result = a * b;
    } else if (operator == '/') {
        result = a / b;
    }

    const resultBin = (result >>> 0).toString(2);
    displayWindow.innerText = resultBin

}


const btn0 = document.getElementById("btn0")
btn0.onclick = function () {displayNumOperator(btn0.innerText)}
const btn1 = document.getElementById("btn1")
btn1.onclick = function () {displayNumOperator(btn1.innerText)}
const btnSum = document.getElementById("btnSum")
btnSum.onclick = function () {displayNumOperator(btnSum.innerText)}
const btnSub = document.getElementById("btnSub")
btnSub.onclick = function () {displayNumOperator(btnSub.innerText)}
const btnMul = document.getElementById("btnMul")
btnMul.onclick = function () {displayNumOperator(btnMul.innerText)}
const btnDiv = document.getElementById("btnDiv")
btnDiv.onclick = function () {displayNumOperator(btnDiv.innerText)}
const btnClr = document.getElementById("btnClr")
btnClr.onclick = function () {deleteChar()}
const btnEql = document.getElementById("btnEql")
btnEql.onclick = function () {sanitizeInput()}



// clr clicked -> delete everything

// equal pressed -> calculate and display the result

