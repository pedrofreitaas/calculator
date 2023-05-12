var op1 = 0;
var operation='';

function setOperation(operation_str) {
    let calculator_display = document.getElementById('calculator_display');

    op1 = parseFloat(calculator_display.value);
    operation = operation_str;
    calculator_display.value = '';
}

function giveResult() {
    let calculator_display = document.getElementById('calculator_display');

    if (operation=='sum') op1 += parseFloat(calculator_display.value);

    else if (operation=='sub') op1 -= parseFloat(calculator_display.value);

    else if (operation=='mul') op1 *= parseFloat(calculator_display.value);

    else if (operation=='div') op1 /= parseFloat(calculator_display.value);

    else if (operation=='root') op1 = Math.pow(op1, 1/parseFloat(calculator_display.value));
    
    else if (operation=='elevate') op1 = Math.pow(op1, parseFloat(calculator_display.value));

    calculator_display.value = op1;
}

function clearDisplay() {
    let calculator_display = document.getElementById('calculator_display');

    calculator_display.value = operation = '';
}

function addNumber(button) {
    let calculator_display = document.getElementById('calculator_display');

    calculator_display.value += button.innerHTML;
}

function addDot() {
    let calculator_display = document.getElementById('calculator_display');
    
    calculator_display.value += '.';
}