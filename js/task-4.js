const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()
    const email = event.target.email.value.trim()
    const password = event.target.password.value.trim()

    if (email === "" || password === "") {
        alert("All form fields must be filled in")
    }
    else {
        const dataForm = {
            email: email,
            password: password
        }
        console.log(dataForm)
        event.target.reset()
    }
    
}
