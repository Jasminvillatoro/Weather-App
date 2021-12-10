fetch(
 'http://api.openweathermap.org/data/2.5/weather?q=miami&APPID=42e3978119d72ed084eb89f268191846'
)
 .then(response => {
  if (response.ok) {
   return response.json();
  } else {
   throw new Error('Network response Error');
  }
 })
 .then(data => {
  console.log(data);
  displayWeatherData(data);
 })
 .catch(error => console.error('FETCH ERROR:', error));
function displayWeatherData(data) {}
