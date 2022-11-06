function getData(e) {
  e.preventDefault();
  let search = document.getElementById("search").value;
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=74d744fe209ce0689f98052c2dc882c7`
  )
    .then(convertToJSON)
    .then(showWeather);
}

function showWeather(data) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=74d744fe209ce0689f98052c2dc882c7`
  )
    .then(convertToJSON)
    .then(showdataWeather);
}

function showdataWeather(data) {
  let temp = data.main.temp - 273.15;
  temp = parseFloat(temp).toFixed(2);

  document.getElementById("result").innerHTML = `
  <div class="head">
        <h2>Weather of <span class="name">${data.name}</span></h2>
      </div>
      <div class="res">
        <p>Sky Conditions: <span> ${data.weather[0].description}</span></p>
        <p>Temperature: <span> ${temp} C</span></p>
        <p>Wind Speed: <span> ${data.wind.speed} km/h</span></p>
      </div>`;
}
function convertToJSON(response) {
  return response.json();
}

document.getElementById("submit").addEventListener("submit", getData);
