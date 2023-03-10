// Go to Blogs
document.getElementById("blog-btn").addEventListener("click", function () {
  location.href = "blog.html";
});
// This function takes any input element's value and return the value in number
function getInputValueById(element) {
  const inputField = document.getElementById(element);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldString);

  return inputFieldValue;
}

// This function validates the inputs and shows error accordingly
function validateInputs(input1, input2) {
  // checks is input is negative
  if (input1 <= 0 || input2 <= 0) {
    alert("Please enter a positive number!");
    return -1;
  }
  // checks if value is empty
  else if (isNaN(input1) || isNaN(input2)) {
    alert("Please enter all numbers!");
    return -1;
  }
}

// This function clears input value
function clearInputValueByName(element) {
  document.getElementById(element + "-1-input").value = "";
  document.getElementById(element + "-2-input").value = "";
}

// Set text by using Id
function setTextByName(element, value1, value2) {
  document.getElementById(element + "-1-text").innerText = value1;
  document.getElementById(element + "-2-text").innerText = value2;
}

// Value edit button
function undisableInputField(element) {
  document.getElementById(element + "-1-input").disabled = false;
  document.getElementById(element + "-2-input").disabled = false;
}

// This function creates new list items in "Area Calculation" section
function createListElement(shape, area) {
  const ol = document.getElementById("result-list");
  const li = document.createElement("li");
  li.innerHTML =
    shape +
    `
  <input
    type="number"
    value=` +
    area +
    `
    id="area-value"
    class="w-11 ml-1 appearance-none outline-none pointer-events-none"
    disabled
  /><span id="centi" class="pointer-events-none">cm</span><sup class="pointer-events-none">2</sup>
  <button
    class="bg-sky-500 rounded px-2 py-1 ml-2 text-white text-sm"
    id="convert-btn"
  >
    Convert to m<sup>2</sup>
  </button>`;

  li.classList.add("mb-2", "items", "text-sm", "w-full");
  ol.appendChild(li);
}

// OnHover Color change
const cards = document.querySelectorAll(".card-body");
// console.log(cards);

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("mouseenter", function () {
    const hexCode = Math.floor(100000 + Math.random() * 900000);
    // console.log(hexCode);
    this.style.backgroundColor = "#" + hexCode;
  });
}
