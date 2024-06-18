let display = document.getElementById('display');
let currentInput = '0';
let operator = '';

function append(value) {
    if (currentInput === '0') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.innerHTML = currentInput;
}

function calculate() {
    let result = eval(currentInput);
    display.innerHTML = result;
    currentInput = result.toString();
}

function clearDisplay() {
    currentInput = '0';
    display.innerHTML = currentInput;
}
