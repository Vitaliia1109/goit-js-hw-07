const inPut = document.querySelector("#name-input")
const outPut = document.querySelector("#name-output")

inPut.addEventListener("input", outPutHandler)

function outPutHandler() {
    const name = inPut.value.trim();

    if (name === "") {
        outPut.textContent = "Anonymous";
    }
    else {
    outPut.textContent = name
    }
    
}