const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();

    // FUN FACT -------------------------------------------------------------------

    document.getElementById("text-funfact-block").innerHTML = data.fact;

    // WEATHER --------------------------------------------------------------------

    let date = new Date();

    document.getElementById("date-weather-block").innerHTML =
      date.toUTCString();
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

    // data.lunchs.map((lunch) => {
    //   console.log(lunch.type);
    //   console.log(lunch.name);
    //   console.log(lunch.address);
    //   console.log(lunch.googlemap);
    // });
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();

// NEWS ---------------------------------------------------------------

function getTech() {
  fetchNews("tech");
}
document.getElementById("link-tech").addEventListener("click", getTech);

function getApps() {
  fetchNews("apps");
}
document.getElementById("link-apps").addEventListener("click", getApps);

const fetchNews = async (categorie) => {
  try {
    if (categorie === undefined) {
      const response = await fetch(`http://localhost:3000/news/apps`);
      const data = await response.json();
      let article = data.articles;
      // dataArticles.map((article) => {
      //   console.log(dataArticles.length);

      //   let titleArticle = document.getElementById("title-article");
      //   let element = document.createElement("p");
      //   element.innerHTML = article.title;
      //   titleArticle.appendChild(element);
      // });

      //article 1:
      document.getElementsByClassName("title-article")[0].innerHTML =
        article[0].title;
      document.getElementsByClassName("author-article")[0].innerHTML =
        article[0].author;
      document.getElementsByClassName("date-article")[0].innerHTML =
        "Published at : " + article[0].publishedAt;
      document.getElementsByClassName("description-article")[0].innerHTML =
        article[0].description;
      document.getElementsByClassName("link-article")[0].href = article[0].url;
      document.getElementsByClassName("img-article")[0].src =
        article[0].urlToImage;

      //article 2:
      document.getElementsByClassName("title-article1")[0].innerHTML =
        article[1].title;
      document.getElementsByClassName("author-article1")[0].innerHTML =
        article[1].author;
      document.getElementsByClassName("date-article1")[0].innerHTML =
        "Published at : " + article[1].publishedAt;
      document.getElementsByClassName("description-article1")[0].innerHTML =
        article[1].description;
      document.getElementsByClassName("link-article1")[0].href = article[1].url;
      document.getElementsByClassName("img-article1")[0].src =
        article[1].urlToImage;

      // article 3:
      document.getElementsByClassName("title-article2")[0].innerHTML =
        article[2].title;
      document.getElementsByClassName("author-article2")[0].innerHTML =
        article[2].author;
      document.getElementsByClassName("date-article2")[0].innerHTML =
        "Published at : " + article[2].publishedAt;
      document.getElementsByClassName("description-article2")[0].innerHTML =
        article[2].description;
      document.getElementsByClassName("link-article2")[0].href = article[2].url;
      document.getElementsByClassName("img-article2")[0].src =
        article[2].urlToImage;
    } else {
      const response = await fetch(`http://localhost:3000/news/${categorie}`);
      const data = await response.json();

      let article = data.articles;

      //article 1:
      document.getElementsByClassName("title-article")[0].innerHTML =
        article[0].title;
      document.getElementsByClassName("author-article")[0].innerHTML =
        article[0].author;
      document.getElementsByClassName("date-article")[0].innerHTML =
        "Published at : " + article[0].publishedAt;
      document.getElementsByClassName("description-article")[0].innerHTML =
        article[0].description;
      document.getElementsByClassName("link-article")[0].href = article[0].url;
      document.getElementsByClassName("img-article")[0].src =
        article[0].urlToImage;

      //article 2:
      document.getElementsByClassName("title-article1")[0].innerHTML =
        article[1].title;
      document.getElementsByClassName("author-article1")[0].innerHTML =
        article[1].author;
      document.getElementsByClassName("date-article1")[0].innerHTML =
        "Published at : " + article[1].publishedAt;
      document.getElementsByClassName("description-article1")[0].innerHTML =
        article[1].description;
      document.getElementsByClassName("link-article1")[0].href = article[1].url;
      document.getElementsByClassName("img-article1")[0].src =
        article[1].urlToImage;

      // article 3:
      document.getElementsByClassName("title-article2")[0].innerHTML =
        article[2].title;
      document.getElementsByClassName("author-article2")[0].innerHTML =
        article[2].author;
      document.getElementsByClassName("date-article2")[0].innerHTML =
        "Published at : " + article[2].publishedAt;
      document.getElementsByClassName("description-article2")[0].innerHTML =
        article[2].description;
      document.getElementsByClassName("link-article2")[0].href = article[2].url;
      document.getElementsByClassName("img-article2")[0].src =
        article[2].urlToImage;
    }
  } catch (error) {
    console.log(error.message);
  }
};

fetchNews();
