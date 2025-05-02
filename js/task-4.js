
const form = document.querySelector(".js-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    userPassword: e.target.elements.password.value.trim(),
    userEmail: e.target.elements.email.value.trim(),
  };
  if (data.userPassword === "" || data.userEmail === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log(data);
  e.target.reset();
});
