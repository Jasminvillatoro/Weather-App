const apiKey = '42e3978119d72ed084eb89f268191846';
// Selecting searchbox

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(event) {
 if (event.keyCode === 13) {
  getResults(searchbox.value);
 }
}
// Fetching Data From OpenWeather API
function getResults(query) {
 fetch(
  `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${query}&APPID=${apiKey}`
 )
  .then(response => {
   return response.json();
  })
  .then(displayResults); // Calling Function
}
/* This Function Displays weather data we got from the Json Object using
 .notation to access object properties */

function displayResults(weather) {
 let city = document.querySelector('.location .city');
 city.innerText = `${weather.name}, ${weather.sys.country}`;

 let now = new Date();
 let date = document.querySelector('.location .date');
 date.innerText = dateBuilder(now);
 let temp = document.querySelector('.temperature');
 temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
}

function dateBuilder(d) {
 let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
 ];
 let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
 ];
 let day = days[d.getDay()];
 let date = d.getDate();
 let month = months[d.getMonth()];
 let year = d.getFullYear();
 return `${day} ${date} ${month} ${year}`;
}
