function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "ef338f15103ddb4f3d78cb7b6408d7e7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
