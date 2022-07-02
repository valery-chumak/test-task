const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.addEventListener("input", onRangeInput);

function onRangeInput(event) {
    text.style.fontSize = event.currentTarget.value + 'px';
}