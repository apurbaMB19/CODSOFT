
/*
    CodSoft Internship - Web Development
    Batch - December
    Name - Apurba Hansda
    Date - 27/12/2024
    Level 1 (Task 3) - Simple Calculator
*/

let resultField = document.getElementById('result');

function appendNumber(number) {
  resultField.value += number;
}

function appendOperator(operator) {
  resultField.value += operator;
}

function calculate() {
  try {
    let result = eval(resultField.value);
    resultField.value = result;
  } catch (error) {
    resultField.value = 'Error';
  }
}

function clearResult() {
  resultField.value = '';
}
