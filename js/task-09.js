function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const BODY = document.body;
const CHANGE_COLOR_BTN = document.querySelector(".change-color");
const OUTPUT_COLOR = document.querySelector(".color");

CHANGE_COLOR_BTN.addEventListener("click", onChengeColorBtn);

function onChengeColorBtn() {
  const color = getRandomHexColor();
  BODY.style.backgroundColor = color;
  OUTPUT_COLOR.textContent = color;
}
