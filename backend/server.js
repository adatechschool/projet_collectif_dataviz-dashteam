const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const request = require("request");


const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())

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

/* ----------------------------------------------------------------------------- */

app.get("/", async (req, res) => {
  try {

    let d = new Date()
  
    let month = d.getMonth()+1
    let date = d.getDate()
    const response = await fetch("http://numbersapi.com/"+month+"/"+date+"/date") 
    let text = await response.text()
    
 
  


    const responseWeather = await fetch ("https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=69df7b8d93250c75b0422f77ae3f0484&units=metric&lang=fr");
    const responseWeather2 = await responseWeather.json()
    res.json({apiWeather:responseWeather2,fact:text})
  } catch (error) {
    res.status(400).json(error.message);
  } 


 
});


app.listen(3000, () => {
  console.log("Server has started");
});

