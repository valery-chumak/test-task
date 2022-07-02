const inputLine = document.querySelector("#validation-input");
console.dir(inputLine);
inputLine.addEventListener("blur", onInputLineBlur);

function onInputLineBlur(event) {
    if (event.currentTarget.value.length === Number(inputLine.dataset.length)) {
        inputLine.className = "valid";
    }
    else {
        inputLine.className = "invalid";
    }
}