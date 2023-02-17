// Here the value of the area is converted from cm^2 to m^2
document
  .getElementById("result-list")
  .addEventListener("click", function (event) {
    // console.log(event.target.parentNode.childNodes);
    // the input field where the area value is stored is accessed using event from any child
    const resultAreaField = event.target.parentNode.childNodes[1];
    const resultAreaString = resultAreaField.value;
    const resultAreaValue = parseFloat(resultAreaString);

    const meterSquareArea = resultAreaValue * 0.0001;

    // the span which contains the text "cm" is accessed and updated to "m"
    const centimeterSquareText = event.target.parentNode.childNodes[2];
    centimeterSquareText.innerText = "m";

    // console.log(meterSquareArea);
    resultAreaField.value = meterSquareArea;
  });
