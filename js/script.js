const button = document.querySelectorAll("button");
const result = document.getElementById("result");

document.addEventListener("keydown", handleKeyPress);

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    const buttonValue = button[i].textContent;
    handleButtonPress(buttonValue);
  });
}

function handleKeyPress(event) {
  const key = event.key;

  // Check if the pressed key is a number or a valid operator
  if (/\d|\+|\-|\*|\//.test(key)) {
    handleButtonPress(key);
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Escape") {
    clearResult();
  } else {
    // Display an error message for invalid input
    result.value = "Enter only numbers and valid operators!";
  }
}

function handleButtonPress(buttonValue) {
  if (buttonValue === "C") {
    clearResult();
  } else if (buttonValue === "=") {
    calculateResult();
  } else {
    appendValue(buttonValue);
  }
}

function clearResult() {
  result.value = "";
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    // Display an error message for invalid expressions
    result.value = "Invalid expression!";
  }
}

function appendValue(buttonValue) {
  result.value = result.value + buttonValue;
}
