const button = document.getElementById("myButton");
const selectionBox = document.getElementById("selectionBox");

button.addEventListener("click", () => {
  selectionBox.className = "block";
  const options = ["Bulb", "Fan", "TV", "AC"];
  const selectElement = document.createElement("select");
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.text = option;
    selectElement.appendChild(optionElement);
  });
  selectionBox.appendChild(selectElement);
});
