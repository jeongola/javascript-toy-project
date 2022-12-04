const clock = document.querySelector('.clock');

const hour = String(new Date().getHours()).padStart(2, '0');
const min = String(new Date().getMinutes()).padStart(2, '0');

clock.innerHTML = `${hour} : ${min}`;
