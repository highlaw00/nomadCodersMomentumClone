const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const helloVisitor = document.querySelector("#greeting");
const logoutForm = document.querySelector("#logout-form");
const logoutInput = logoutForm.querySelector("input");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmitted(event) {
  event.preventDefault(); // this code prevent default behavior of eventlistener, ex) refresh page
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  executeLogOut();
}

function executeLogOut() {
  paintGreetings();
  paintLogOutSubmit();
  logoutForm.addEventListener("submit", handleLogoutSubmitted);
}

function handleLogoutSubmitted(event) {
  localStorage.removeItem(USERNAME_KEY);
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello! ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function paintLogOutSubmit() {
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmitted);
} else {
  // show the greetings.
  executeLogOut();
}
