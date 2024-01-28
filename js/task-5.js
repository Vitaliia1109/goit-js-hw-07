function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body")
const changeColor = document.querySelector(".change-color")
const spanColor = document.querySelector(".color")

changeColor.addEventListener("click", changeColorHandler)

function changeColorHandler() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = body.style.backgroundColor;
}
