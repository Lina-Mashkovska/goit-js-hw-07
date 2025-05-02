function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnElem = document.querySelector(".change-color");
const spanElem = document.querySelector(".js-color");
const body = document.body;
const changeColor = () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanElem.textContent = color;
};
btnElem.addEventListener("click", changeColor);