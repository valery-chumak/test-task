let counterGlobal = 0;
let following = false;

let counterValue = document.querySelector("#followers_value").textContent;
const spanValue = document.querySelector("#followers_value");
const followButton = document.querySelector('[data-action = "follow"]');

followButton.addEventListener("click", onFollowButtonClick);

counterValue = parseFloat(counterValue.replace(/,/g, ""));

function onFollowButtonClick() {
  if (!following) {
    following = true;
    followButton.textContent = "FOLLOWING";
    followButton.style.backgroundColor = "#5cd3a8";
    counterValue += 1;
  } else {
    following = false;
    followButton.textContent = "FOLLOW";
    followButton.style.backgroundColor = "#ebd8ff";
    counterValue -= 1;
  }

  spanValue.textContent = counterValue.toLocaleString("en-US");
}
