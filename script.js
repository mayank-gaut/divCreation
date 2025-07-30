//Write your code here
function createDiv(width, height, text) {
  // Create a new div element
  const newDiv = document.createElement('div');

  // Set width and height with "px" unit
  newDiv.style.width = width + 'px';
  newDiv.style.height = height + 'px';

  // Set the text content
  newDiv.textContent = text;

  // Append the new div to the container
  const container = document.getElementById('container');
  container.appendChild(newDiv);
}
createDiv(200, 100, 'Hello World');

// Do not change this code
Window.createDiv = createDiv;