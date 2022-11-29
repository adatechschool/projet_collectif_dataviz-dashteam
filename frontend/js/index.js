const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();

    // FUN FACT -------------------------------------------------------------------

    document.getElementById("text-funfact-block").innerHTML = data.fact;

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

// NEWS ---------------------------------------------------------------

const fetchNews = async (categorie) => {
  try {
    if (!categorie) {
      const response = await fetch(`http://localhost:3000/news/tech`);
      const data = await response.json();

      let article = data.responseNews2.articles;

      //article 1:
      document.getElementsByClassName("title-article").innerHTML =
        article[0].title;
      document.getElementByClassName("author-article").innerHTML =
        "Written by : " + article[0].author;
      document.getElementByClassName("date-article").innerHTML =
        "Published at : " + article[0].publishedAt;
      document.getElementByClassName("description-article").innerHTML =
        article[0].description;
      document.getElementByClassName("link-article").href = article[0].url;
      document.getElementByClassName("img-article").src = article[0].urlToImage;

      //article 2:
      document.getElementByClassName("title-article").innerHTML =
        article[1].title;
      document.getElementByClassName("author-article").innerHTML =
        "Written by : " + article[1].author;
      document.getElementByClassName("date-article").innerHTML =
        "Published at : " + article[1].publishedAt;
      document.getElementByClassName("description-article").innerHTML =
        article[1].description;
      document.getElementByClassName("link-article").href = article[1].url;
      document.getElementByClassName("img-article").src = article[1].urlToImage;

      // article 3:
      document.getElementByClassName("title-article").innerHTML =
        article[2].title;
      document.getElementByClassName("author-article").innerHTML =
        "Written by : " + article[2].author;
      document.getElementByClassName("date-article").innerHTML =
        "Published at : " + article[2].publishedAt;
      document.getElementByClassName("description-article").innerHTML =
        article[2].description;
      document.getElementByClassName("link-article").href = article[2].url;
      document.getElementByClassName("img-article").src = article[2].urlToImage;
    } else {
      const response = await fetch(`http://localhost:3000/news/${categorie}`);
      const data = await response.json();
      console.log(data);

      let article = data.responseNews2.articles;
      //article 1:
      document.getElementByClassName("title-article").innerHTML =
        article[0].title;
      document.getElementByClassName("author-article").innerHTML =
        "Written by : " + article[0].author;
      document.getElementByClassName("date-article").innerHTML =
        "Published at : " + article[0].publishedAt;
      document.getElementByClassName("description-article").innerHTML =
        article[0].description;
      document.getElementByClassName("link-article").href = article[0].url;
      document.getElementByClassName("img-article").src = article[0].urlToImage;

      //article 2:
      document.getElementByClassName("title-article").innerHTML =
        article[1].title;
      document.getElementByClassName("author-article").innerHTML =
        "Written by : " + article[1].author;
      document.getElementByClassName("date-article").innerHTML =
        "Published at : " + article[1].publishedAt;
      document.getElementByClassName("description-article").innerHTML =
        article[1].description;
      document.getElementByClassName("link-article").href = article[1].url;
      document.getElementByClassName("img-article").src = article[1].urlToImage;

      // article 3:
      document.getElementByClassName("title-article").innerHTML =
        article[2].title;
      document.getElementByClassName("author-article").innerHTML =
        "Written by : " + article[2].author;
      document.getElementByClassName("date-article").innerHTML =
        "Published at : " + article[2].publishedAt;
      document.getElementByClassName("description-article").innerHTML =
        article[2].description;
      document.getElementByClassName("link-article").href = article[2].url;
      document.getElementByClassName("img-article").src = article[2].urlToImage;
    }
  } catch (error) {
    console.log(error.message);
  }
};

fetchNews();
