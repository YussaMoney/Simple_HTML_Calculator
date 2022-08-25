const calculate = document.querySelector('button');

function calc() {
  const operator = document.querySelector('#operators').value;
  const value1 = parseFloat(document.querySelector('#value1').value)
  const value2 = parseFloat(document.querySelector('#value2').value)
  let result;
  if (operator == 'add') {
    result = value1 + value2;
  } else if (operator == 'subtract') {
    result = value1 - value2
  } else if (operator == 'multiply') {
    result = value1 * value2
  } else if (operator == 'divide') {
    result = value1 / value2
  }
  document.querySelector('#output').innerHTML = result.toFixed(1);
}
function style() {
  const output = document.querySelector('#output');
  output.classList.add('result-output');
}

calculate.addEventListener('click', style);
calculate.addEventListener('click', calc);
