const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();

    // FUN FACT -------------------------------------------------------------------

    document.getElementById("text-funfact-block").innerHTML = data.fact;
    console.log(data.fact.text);
    // WEATHER --------------------------------------------------------------------

    document.getElementById("date-weather-block").innerHTML = new Date();
    document.getElementById("city-weather-block").innerHTML =
      data.apiWeather.name;
    document.getElementById("degrees-weather-block").innerHTML =
      Math.round(data.apiWeather.main.temp) + " °C";

    let main = data.apiWeather.weather[0].main;

    const sunshine = "/frontend/img/sunshine.png";
    const cloudy = "/frontend/img/cloudy.png";
    const cloudy2 = "/frontend/img/cloudy2.png";
    const rain = "/frontend/img/rain.png";
    const storm = "/frontend/img/storm.png";

    const img = document.getElementById("weather-block").style;
    if (main === "Clear") {
      img.backgroundImage = "url(" + sunshine + ")";
    } else if (main === "Clouds") {
      img.backgroundImage = "url(" + cloudy + ")";
    } else if (
      main === "Drizzle" ||
      main === "Fog" ||
      main === "Fist" ||
      main === "Smoke" ||
      main === "Squall" ||
      main === "Mist"
    ) {
      img.backgroundImage = "url(" + cloudy2 + ")";
    } else if (main === "Rain") {
      img.backgroundImage = "url(" + rain + ")";
    } else if (main === "Thunderstorm") {
      img.backgroundImage = "url(" + storm + ")";
    }

    // RANDOM LUNCHS ---------------------------------------------------------------

    data.lunchs.map((lunch) => {
      console.log(lunch.type);
      console.log(lunch.name);
      console.log(lunch.address);
      console.log(lunch.googlemap);
    });
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
