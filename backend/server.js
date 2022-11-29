const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const request = require("request");
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

/* Client Credentials oAuth2 flow to authenticate against the Spotify Accounts. */

var client_id = "def7c58bf1dc4c55bafe1c7c9e0f5331";
var client_secret = "9b8ef3c114684d9ab02a70350b778dfe";

// Application requests authorization
const authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      Buffer.from(client_id + ":" + client_secret).toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded",
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    // Use the access token to access the Spotify Web API
    const token = body.access_token;
    console.log(token);
  }
});


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
    
        // faire script qui trouve random dans les resto, dans le front il faut import 
    
    // RANDOM activity ---------------------------------------------------------------
    
    const responseActivity = await fetch("http://www.boredapi.com/api/activity/")
    const textActivity = await responseActivity.text()


    // RESPONSE JSON --------------------------------------------------------------

    res.json({
      apiWeather: responseWeather2,
      fact: text,
      lunchs: lunchs,
      bored: textActivity
    });
    
  } catch (error) {
    res.status(400).json(error.message);
  } 
});


app.get("/news/:keyword", async (req, res) => {
  try {
    console.log(req.params)
    let domain = 'techcrunch.com'
    const responseNews = await fetch (`https://newsapi.org/v2/everything?q=${req.params.keyword}&sortBy=publishedAt&apiKey=548a9b5db8f04f29b16fc57f77b4e7f1&language=en&language=fr&domains=${domain}`)
    const responseNews2 = await responseNews.json() 
    console.log(responseNews2)
    res.json(responseNews2)
    
  } catch (error) {
    res.status(400).json(error.message);
  } 

});


app.listen(3000, () => {
  console.log("Server has started");

}); 
