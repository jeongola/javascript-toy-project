const weather = document.querySelector('#weatherContainer span:first-child');
const city = document.querySelector('#weatherContainer span:last-child');

const API_KEY = '5064f7b054a714502776da94a739f303';

function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log('You live in ', lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metrics`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerHTML = `${data.weather[0].main}/${data.main.temp}`;
      city.innerHTML = `${data.name}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
