fetch(
  "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=74d744fe209ce0689f98052c2dc882c7"
)
  .then(convertToJSON)
  .then(showWeather);

function showWeather(data) {
  console.log(data);
}
function convertToJSON(response) {
  return response.json();
}
