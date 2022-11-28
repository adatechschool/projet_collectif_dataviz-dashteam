const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  try {

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
