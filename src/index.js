function formatCurrentDayAndTime() {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let now = new Date();
    let currentDay = days[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
  
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
  
    return `${currentDay} ${hours}:${minutes}`;
  }
  
  function updateCityAndTime(city) {
    let cityElement = document.querySelector(".current-city");
    cityElement.innerHTML = city;
  
    let timeElement = document.querySelector(".current-date-time");
    timeElement.innerHTML = formatCurrentDayAndTime();
  }
  
  function citySearch(event) {
    event.preventDefault();
    let searchInput = document.querySelector(".search-input");
    let city = searchInput.value.trim();
  
    if (city) {
      updateCityAndTime(city);
  
      let apiKey = "a4adbd3ete0df14f5fa9050ddd7off63";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(displayTemperature);
    }
  }
  
  function displayTemperature(response) {
    let temperature = Math.round(response.data.temperature.current);
    let temperatureElement = document.querySelector(".current-temperature-value");
    temperatureElement.innerHTML = `${temperature}`;
  }
  
  let weatherApp = document.querySelector("#search-form");
  weatherApp.addEventListener("submit", citySearch);
  