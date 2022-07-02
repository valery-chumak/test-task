let counterValue = 0;
const spanValue = document.querySelector("#value");
 
const decrementButton = document.querySelector('[data-action = "decrement"]');
const incrementButton = document.querySelector('[data-action = "increment"]');

decrementButton.addEventListener("click", onDecrementButtonClick);
incrementButton.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
    counterValue -= 1;
    spanValue.textContent = counterValue;
};
function onIncrementButtonClick() {
    counterValue += 1;
    spanValue.textContent = counterValue;
};