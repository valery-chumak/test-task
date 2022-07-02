function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonColor = document.querySelector(".change-color");
const widget = document.querySelector(".widget");
const colorName = document.querySelector(".color");


buttonColor.addEventListener("click", onButtonColorClick);

function onButtonColorClick(event) {
  widget.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
}