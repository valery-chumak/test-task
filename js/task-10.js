function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
let counter= 1;

function createBoxes(amount) {
  for (let i = 1; i <= amount; i++){
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = (30 * counter) + "px";
    div.style.height = (30 * counter) + "px";
    div.classList.add("color-box");
    boxes.append(div); 
    counter++;
  }
}
createButton.addEventListener("click", onCreateButtonClick);

function onCreateButtonClick(event) {
  createBoxes(inputNumber.value);
}


destroyButton.addEventListener("click", onDestroyButtonClick);

function onDestroyButtonClick() {
  boxes.innerHTML = '';
  inputNumber.value = '';
}