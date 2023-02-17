// triangle calculation on triangle calculate button click
document
  .getElementById("triangle-calc-btn")
  .addEventListener("click", function () {
    const breadth = getInputValueById("triangle-1-input");
    const height = getInputValueById("triangle-2-input");

    if (validateInputs(breadth, height) === -1) {
      clearInputValueById("triangle-1-input");
      clearInputValueById("triangle-2-input");
      return;
    }

    const area = 0.5 * breadth * height;
    createListElement("Triangle", area);
    
    clearInputValueById("triangle-1-input");
    clearInputValueById("triangle-2-input");
  });
