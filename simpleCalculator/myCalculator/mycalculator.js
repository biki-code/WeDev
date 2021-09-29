function getElements() {
  return [
    document.getElementById("number1").value,
    document.getElementById("number2").value,
  ];
}

function answer(value) {
  var element = document.getElementById("answer");

  if (!isNaN(value) && isFinite(value)) {
    element.innerHTML = value;
  } else {
    element.innerHTML = "Math Error!!!!!";
  }

  // change font color based on the answer
  if (value < 0 || isNaN(value) || !isFinite(value)) {
    element.style.color = "red";
  } else if (value == 0) {
    element.style.color = "black";
  } else {
    element.style.color = "pink";
  }
}
function addition() {
  var [num1, num2] = getElements();
  var value = +num1 + +num2;
  answer(value);
}
function subtraction() {
  var [num1, num2] = getElements();
  var value = +num1 - +num2;
  answer(value);
}
function multiplication() {
  var [num1, num2] = getElements();
  var value = +num1 * +num2;
  answer(value);
}
function division() {
  var [num1, num2] = getElements();
  var value = +num1 / +num2;
  answer(value);
}

// complete the rest of it and highlight negative answers in red and positive ones in green
// hint: if answer < 0 { document.getElementbyId("").style.fontColor = "red" } else {document.getElementbyId("").style.fontColor = "green"}
