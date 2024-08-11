const parent = document.querySelector("#main");
const article = document.querySelector("[data-article]");
const image = document.querySelector("[data-image]"); // header
const activeState = document.querySelector("[data-active]"); // main
const successState = document.querySelector("[data-sucess]");
const emailInput = document.querySelector('input[name="email-address"]');

const validateEmail = function (email) {
  // Validation for the email
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const isValid = function () {
  emailInput.classList.add("sucessinput");

  //Remove the sucessinput after 2s
  setTimeout(() => {
    emailInput.classList.remove("sucessinput");
  }, 2000);

  //   Perform the task after 500milisecons
  setTimeout(() => {
    if (successState) successState.classList.remove("hide");
    if (article) article.classList.add("default");
    if (image) image.classList.add("hide");
    if (activeState) activeState.classList.add("hide");
    if (emailInput) emailInput.value = ""; // Clear the input field
  }, 2500);
};

const isNotValid = function () {
  // If it's not valid
  emailInput.classList.add("errorinput");
  emailInput.setCustomValidity("Valid email required");
  emailInput.reportValidity(); // Display the validation error

  //   remove the errorinput class after 3s
  setTimeout(() => {
    emailInput.classList.remove("errorinput");
  }, 3000);
};

const dismissed = function () {
  if (image) image.classList.remove("hide");
  if (activeState) activeState.classList.remove("hide");
  if (article) article.classList.remove("default");
  if (successState) successState.classList.add("hide");
};

parent.addEventListener("click", function (e) {
  e.preventDefault();
  const submit = e.target.closest("[data-submit]");
  const dismiss = e.target.closest("[data-dismiss]");

  if (submit) {
    const emailValue = emailInput.value.trim();
    validateEmail(emailValue) ? isValid() : isNotValid();
  }

  if (dismiss) {
    dismissed();
  }
});
