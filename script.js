const emailField = document.getElementById("email-field")
const errorTxt = document.getElementById("error-txt")
const button = document.getElementById("btn")
const errorIcon = window.getComputedStyle(button, "::before")

function emailValidation() {
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errorTxt.innerHTML = "Please provide a valid email";
        button.style.setProperty("--error", "1");
        return false;

    }
    errorTxt.innerHTML = "";
    button.style.setProperty("--error", "0");
    return true;
}

button.addEventListener("click", (e) => {
    if (emailValidation() == true) {
        alert("Success 🎉");
    }
    e.preventDefault();
})