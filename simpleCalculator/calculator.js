function getElements() {
  return [
    document.getElementById("number1").value,
    document.getElementById("number2").value,
  ];
}

function renderAnswer(answer) {
  document.getElementById("answer").innerHTML = answer;
}

function subtraction() {
  // destructuring
  var [num1, num2] = getElements();
  var answer = +num1 - +num2;
  renderAnswer(answer);
}
function addition() {
  var [num1, num2] = getElements();
  var answer = +num1 + +num2;
  renderAnswer(answer);
}
function multiplication() {
  var [num1, num2] = getElements();
  var answer = +num1 * +num2;
  renderAnswer(answer);
}
function division() {
  var [num1, num2] = getElements();
  var answer = +num1 / +num2;
  renderAnswer(answer);
}
