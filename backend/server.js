const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const request = require("request");
// const axios = require("axios");
// const qs = require("qs");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", async (req, res) => {
  try {
    // FUN FACT -------------------------------------------------------------------

    let d = new Date();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    const response = await fetch(
      "http://numbersapi.com/" + month + "/" + date + "/date"
    );
    let text = await response.text();

    // WEATHER --------------------------------------------------------------------

    const responseWeather = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=69df7b8d93250c75b0422f77ae3f0484&units=metric&lang=fr"
    );
    const responseWeather2 = await responseWeather.json();

    // RANDOM LUNCH ---------------------------------------------------------------

    const lunchs = require("./lunchs.json");

    // RANDOM activity ---------------------------------------------------------------

    const responseActivity = await fetch(
      "http://www.boredapi.com/api/activity/"
    );
    const textActivity = await responseActivity.text();

    // RESPONSE JSON --------------------------------------------------------------

    res.json({
      apiWeather: responseWeather2,
      fact: text,
      lunchs: lunchs,
      bored: textActivity,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.get("/news/:keyword", async (req, res) => {
  try {
    let domain = "techcrunch.com";
    const responseNews = await fetch(
      `https://newsapi.org/v2/everything?q=${req.params.keyword}&sortBy=publishedAt&apiKey=548a9b5db8f04f29b16fc57f77b4e7f1&language=en&language=fr&domains=${domain}`
    );
    const responseNews2 = await responseNews.json();

    res.json(responseNews2);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(3000, () => {
  console.log("Server has started");
});
