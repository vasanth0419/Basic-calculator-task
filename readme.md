# TASK CALCULATOR SUMMITION..

#### **STANDARD CALCULATOR WITH BASIC CALCULATIONS**

#### _CREATE A HTML FILE NAME_: `index.html`

##### In head tag add css `style.css` bootstrap link....

#### Codes..

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="container">
      <h1 id="title">Calculator-Task</h1>
      <p id="description">Basic calculator</p>
      <div class="calculator">
        <input type="text" id="result" readonly />
        <div class="buttons">
          <button class="clear" id="clear">C</button>
          <button class="operator">/</button>
          <button class="operator">*</button>
          <button class="operator" id="subtract">-</button>
          <button class="number" id="7">7</button>
          <button class="number" id="8">8</button>
          <button class="number" id="9">9</button>
          <button class="operator" id="add">+</button>
          <button class="number">4</button>
          <button class="number">5</button>
          <button class="number">6</button>
          <button class="operator">%</button>
          <button class="number" id="1">1</button>
          <button class="number" id="2">2</button>
          <button class="number" id="3">3</button>
          <button class="equals" id="equal">=</button>
          <button class="number" id="0">0</button>
          <button class="number" id="0">00</button>
          <button class="decimal">.</button>
        </div>
      </div>
    </div>
    <script src="./js/script.js"></script>
    <script src="https://app.zenclass.in/sheets/v1/js/zen/suite/bundle.js"></script>
  </body>
</html>


```

#### create a js file `script.js`.

##### codes in file.

```
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


```

#### codes in the `style.css` file

```

* {
  box-sizing: border-box;
  margin: 0;
}
h1 {
  text-align: center;
  margin: 50px !important;
  padding: 2px;
  border-radius: 30px;
  background: gray;
  color: white !important;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-style: italic;
}
p {
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  font-style: oblique;
}
.calculator {
  background-color: rgb(227, 213, 213);
  padding: 20px;
  max-width: 350px;
  margin: 0 auto;
  border: solid 1px #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin-top: 40px;
}

#result {
  background-color: rgb(226, 238, 203);
  width: 100%;
  padding: 12px;
  font-size: 24px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;
  border-radius: 30px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
}

button {
  padding: 10px;
  font-size: 24px;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 10px !important;
}

button:hover {
  background-color: #ddd;
}

.clear {
  background-color: #ff4136;
  color: #fff;
}

.number,
.decimal {
  background-color: #fff;
  color: #333;
}

.operator {
  background-color: #0074d9;
  color: #fff;
}

.equals {
  background-color: #01ff70;
  grid-row: span 2;
  color: #fff;
}



```
