function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    if (isNaN(num1) || isNaN(num2)) {
        displayError('Please enter valid numbers.');
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                displayError('Cannot divide by zero.');
                return;
            }
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            displayError('Invalid operation selected.');
            return;
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}

function displayError(message) {
    document.getElementById('result').textContent = `Error: ${message}`;
}