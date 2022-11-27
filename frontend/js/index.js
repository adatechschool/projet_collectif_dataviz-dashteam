const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();

    // WEATHER --------------------------------------------------------------------

    document.getElementById("ville").innerHTML = data.apiWeather.name;
    document.getElementById("temperature").innerHTML =
      Math.round(data.apiWeather.main.temp) + " °C";

    // conditions d'affichage des icons meteo :
    let icon = data.apiWeather.weather[0].icon;
    const img = document.querySelector("img").src;
    if (icon === "01d") {
      img = "http://openweathermap.org/img/wn/01d@2x.png";
    }
    if (icon === "02d") {
      img = "http://openweathermap.org/img/wn/02d@2x.png";
    }
    if (icon === "03d" || icon === "04d") {
      img = "http://openweathermap.org/img/wn/04d@2x.png";
    }
    if (icon === "09d" || icon === "10d") {
      img = "http://openweathermap.org/img/wn/09d@2x.png";
    }
    if (icon === "11d") {
      img = "http://openweathermap.org/img/wn/11d@2x.png";
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

// var d = new Date();
// var i = 0;

// setInterval(function () {
//   console.log("test" + i++);
// }, 1000);
