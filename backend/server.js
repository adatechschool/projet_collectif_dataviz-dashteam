const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", async (req, res) => {
  try {
    // const response = await fetch("https://api.chucknorris.io/jokes/random");
    // const data = await response.json();
    // const response2 = await fetch("https://www.affirmations.dev/");
    // const data2 = await response2.json();
    // res.json({ api1: data, api2: data2 });
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
