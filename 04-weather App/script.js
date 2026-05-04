const WeatherBtn = document.getElementById("WeatherBtn");

const getWeather = () => {
  const city = document.getElementById("location").value;
  const apiKey = "adab0ecf0aff38abd1eafcf9c79ed0a5";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weather-Info");
      const description = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const wind = data.wind.speed;
      weatherInfo.innerHTML = `
      <p>Description:${description}</P>
      <p>temperature:${temperature} &#8451</P>
      <p>humidity:${humidity} %</P>
      <p>wind:${wind} m/s</P>

      `;
    })
    .catch((error) => {
      console.error("sorry", error);
      document.getElementById("weather-Info").textContent = "city Not found";
    });
};

WeatherBtn.addEventListener("click", () => {
  getWeather();
});
