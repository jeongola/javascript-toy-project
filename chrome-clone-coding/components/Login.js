const loginForm = document.querySelector('.login_form');
const username = document.querySelector('.username');
const savedUsername = window.localStorage.getItem('username');
const greetings = document.querySelector('.greetings');

if (savedUsername) {
  greetings.innerHTML = `Hello, ${savedUsername}!`;
  loginForm.style.display = 'none';
}

const handleLogin = () => {
  window.localStorage.setItem('username', `${username.value}`);
  loginForm.style.display = 'none';
};

loginForm.addEventListener('submit', handleLogin);
