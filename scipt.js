const screen = document.getElementById('screen');
const keys = document.querySelector('.calculator-keys');
let operator = '';
let previousValue = '';
let currentValue = '';

keys.addEventListener('click', (event) => {
    const target = event.target;
    const value = target.value;

    if (target.matches('button')) {
        if (target.classList.contains('operator')) {
            operator = value;
            previousValue = currentValue;
            currentValue = '';
        } else if (target.classList.contains('equal-sign')) {
            currentValue = calculate(previousValue, operator, currentValue);
            operator = '';
        } else if (target.classList.contains('all-clear')) {
            currentValue = '';
            previousValue = '';
            operator = '';
        } else {
            currentValue += value;
        }

        screen.value = currentValue;
    }
});

function calculate(first, operator, second) {
    let result = '';

    if (operator === '+') {
        result = parseFloat(first) + parseFloat(second);
    } else if (operator === '-') {
        result = parseFloat(first) - parseFloat(second);
    } else if (operator === '*') {
        result = parseFloat(first) * parseFloat(second);
    } else if (operator === '/') {
        result = parseFloat(first) / parseFloat(second);
    }

    return result.toString();
}
