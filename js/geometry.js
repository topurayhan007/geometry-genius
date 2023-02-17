// triangle calculation on triangle calculate button click
document
  .getElementById("triangle-calc-btn")
  .addEventListener("click", function () {
    const breadth = getInputValueById("triangle-1-input");
    const height = getInputValueById("triangle-2-input");

    if (validateInputs(breadth, height) === -1) {
      clearInputValueByName("triangle");
      return;
    }

    const area = 0.5 * breadth * height;

    if (Number.isInteger(area)) {
      createListElement("Triangle", area);
    } else {
      createListElement("Triangle", area.toFixed(2));
    }

    clearInputValueByName("triangle");
  });

// Rectangle calculation on rectangle calculate button click
document
  .getElementById("rectangle-calc-btn")
  .addEventListener("click", function () {
    const width = getInputValueById("rectangle-1-input");
    const length = getInputValueById("rectangle-2-input");

    if (validateInputs(width, length) === -1) {
      clearInputValueByName("rectangle");
      return;
    }

    const area = width * length;

    if (Number.isInteger(area)) {
      createListElement("Rectangle", area);
    } else {
      createListElement("Rectangle", area.toFixed(2));
    }

    clearInputValueByName("rectangle");
  });

// Parallelogram calculation on parallelogram calculate button click
document
  .getElementById("parallelogram-calc-btn")
  .addEventListener("click", function () {
    const breadth = getInputValueById("parallelogram-1-input");
    const height = getInputValueById("parallelogram-2-input");

    if (validateInputs(breadth, height) === -1) {
      clearInputValueByName("parallelogram");
      return;
    }

    const area = breadth * height;

    if (Number.isInteger(area)) {
      createListElement("Parallelogram", area);
    } else {
      createListElement("Parallelogram", area.toFixed(2));
    }

    clearInputValueByName("parallelogram");
  });

// Rhombus calculation on rhombus calculate button click
document
  .getElementById("rhombus-calc-btn")
  .addEventListener("click", function () {
    const d1 = getInputValueById("rhombus-1-input");
    const d2 = getInputValueById("rhombus-2-input");

    if (validateInputs(d1, d2) === -1) {
      clearInputValueByName("rhombus");
      return;
    }

    const area = 0.5 * d1 * d2;

    if (Number.isInteger(area)) {
      createListElement("Rhombus", area);
    } else {
      createListElement("Rhombus", area.toFixed(2));
    }

    clearInputValueByName("rhombus");
  });

// Pentagon calculation on pentagon calculate button click
document
  .getElementById("pentagon-calc-btn")
  .addEventListener("click", function () {
    const d1 = getInputValueById("pentagon-1-input");
    const d2 = getInputValueById("pentagon-2-input");

    if (validateInputs(d1, d2) === -1) {
      clearInputValueByName("pentagon");
      return;
    }

    const area = 0.5 * d1 * d2;

    if (Number.isInteger(area)) {
      createListElement("Pentagon", area);
    } else {
      createListElement("Pentagon", area.toFixed(2));
    }

    clearInputValueByName("pentagon");
  });