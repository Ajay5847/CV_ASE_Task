let result = document.getElementById('box-1');
let expression = '';

function appendValue(value) {
    expression += value;
    result.value = expression;
}

function clearResult() {
    expression = '';
    result.value = '';
}

function backSpace(){
    expression = expression.substring(0,expression.length - 1);
    result.value = expression;
}

function performOperation(operator) {
    expression += operator;
    result.value = expression;
}

function calculateResult() {
    try {
        let operators = expression.match(/[\+\-\*\/]/g);
        let numbers = expression.split(/[\+\-\*\/]/);
        let res = parseFloat(numbers[0]);

        for (let i = 0; i < operators.length; i++) {
            let num = parseFloat(numbers[i + 1]);
            let operator = operators[i];

            if (operator === '+') {
                res += num;
            } else if (operator === '-') {
                res -= num;
            } else if (operator === '*') {
                res *= num;
            } else if (operator === '/') {
                res /= num;
            }
        }

        expression = res.toString();
        if(expression === "NaN"){
            result.value = 'Invalid Expression';
            expression = '';
            return;
        }
        result.value = res;
    } catch (error) {
        result.value = 'Invalid Expression';
        expression = '';
    }
}
