const loginForm = document.querySelector("#login__form");
const loginInput = document.querySelector(".login__input");
const greeting = document.querySelector(".greeting");

function nameSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  loginInput.value = "";
  greeting.classList.remove("hidden");
  greeting.innerText = `반갑습니다 ${username}님!`;
  localStorage.setItem("이름", username);
}

loginForm.addEventListener("submit", nameSubmit);

const saveUsername = localStorage.getItem("이름");

if (saveUsername !== null) {
  greeting.innerText = `반갑습니다 ${saveUsername}님!`;
  greeting.classList.remove("hidden");
  loginForm.classList.add("hidden");
}
