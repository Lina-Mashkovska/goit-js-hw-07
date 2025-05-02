const userNameElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");
userNameElem.addEventListener("input", handleUserNameInput);

function handleUserNameInput(e) {
    const userValue = e.target.value.trim();
    outputElem.textContent = userValue === "" ? "Anonymous" : userValue;

}