const express = require("express");
const morgan = require("morgan");
const cors = require("cors");


const app = express();
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  try {
    // const response = await fetch("https://api.chucknorris.io/jokes/random");
    // const data = await response.json();
    // const response2 = await fetch("https://www.affirmations.dev/");
    // const data2 = await response2.json();
    // res.json({ api1: data, api2: data2 });
    const responseNews = await fetch ("https://newsapi.org/v2/everything?q=javascript&from=2022-10-25&sortBy=publishedAt&apiKey=548a9b5db8f04f29b16fc57f77b4e7f1")

    const responseNews2 = await responseNews.json() // PAS TERMINÉ 
    console.log(responseNews2)
    res.json({apiNews:responseNews2})
  } catch (error) {
    res.status(400).json(error.message);
  } 
});

app.listen(3000, () => {
  console.log("Server has started");
});


// const client_id = "def7c58bf1dc4c55bafe1c7c9e0f5331"; // Your client id
// const client_secret = "9b8ef3c114684d9ab02a70350b778dfe"; // Your secret
// const redirect_uri = "REDIRECT_URI"; // Your redirect uri
