const form = document.querySelector("#form");
const firstName = document.querySelector("#name");
const surname = document.querySelector("#surname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (input, message) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
};

const setSuccess = (input) => {
  const inputControl = input.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  // the const re IK just copied from the tutorial I used for this js
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setError(firstName, "First Name cannot be empty");
  } else {
    setSuccess(firstName);
  }

  if (surnameValue === "") {
    setError(surname, "Last Name cannot be empty");
  } else {
    setSuccess(surname);
  }

  if (!isValidEmail(emailValue)) {
    setError(email, "Looks like this is not an email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password cannot be empty");
  } else {
    setSuccess(password);
  }
};
