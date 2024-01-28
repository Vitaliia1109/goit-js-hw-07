function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input")
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy]")
const boxes = document.querySelector("#boxes")


createBtn.addEventListener("click", createHandler)
function createHandler() {
  const amount = Number(input.value)
  if (amount < 1 || amount > 100) {
    alert("Please enter a valid number between 1 and 100")
    return;

     
  }
  destroyHandler()

  let width = 30
  let height = 30
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div")
    div.style.backgroundColor = getRandomHexColor()
    div.style.width = `${width}px`
    div.style.height = `${height}px`
    boxes.appendChild(div)
    width += 10
    height += 10

  }
  input.value = ""
}



destroyBtn.addEventListener("click", destroyHandler)

function destroyHandler() {
  boxes.innerHTML = ""
}


