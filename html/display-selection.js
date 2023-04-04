const selectedItemContainer = document.getElementById("selected-item-container");

// Get the selected item from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const selectedItem = urlParams.get("selected-item");

// Display the selected item on the page
selectedItemContainer.innerText = `Selected item: ${selectedItem}`;
