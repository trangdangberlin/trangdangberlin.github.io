
// script.js
function changeColor() {
  // Generate random RGB values
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  console.log(randomColor)
  document.body.style.backgroundColor = randomColor;
}
