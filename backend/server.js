const express = require("express");
const morgan = require("morgan");
const request = require("request");

const app = express();
app.use(express.json());
app.use(morgan("dev"));

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
    console.log("response------------->",d)
    let month = d.getMonth()+1
    let date = d.getDate()
    const response = await fetch("http://numbersapi.com/"+month+"/"+date+"/date") 
    let text = await response.text()
    
    console.log("response--------->",text)
    res.json({fact: text})

    // const response = await fetch("https://api.chucknorris.io/jokes/random");
    // const data = await response.json();  
    // const response2 = await fetch("https://www.affirmations.dev/");
    // const data2 = await response2.json();
    // res.json({ api1: data, api2: data2 });

  } catch (error) {
    res.status(400).json(error.message);
    console.log(error)
  }
});


app.listen(3000, () => {
  console.log("Server has started");
});

// const response = await fetch("https://api.chucknorris.io/jokes/random");
// const data = await response.json();
// const response2 = await fetch("https://www.affirmations.dev/");
// const data2 = await response2.json();
// res.json({ api1: data, api2: data2 });
