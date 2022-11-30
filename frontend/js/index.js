
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


    const tabloLunch = (data.lunchs)

    function random_lunch(tabloLunch){
       let result = tabloLunch[Math.floor(Math.random()*tabloLunch.length)]
       console.log(result)
       document.getElementById("name-lunch").innerHTML=result.name
       document.getElementById("type-lunch").innerHTML=result.type
       document.getElementById("address-lunch").innerHTML=result.address
       document.getElementById('link-map').href=result.googlemap
       console.log(result.googlemap)

    }    

    document.getElementById('btn-random').addEventListener("click",getRandomLunch)
    function getRandomLunch (){
      random_lunch(tabloLunch)
    }

    
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();

    // NEWS ---------------------------------------------------------------


  const fetchNews = async (categorie) => {
    try {
       if (!categorie){
        const response = await fetch(`http://localhost:3000/news/tech`);
        const data = await response.json();
       
      let article = data.articles
     
      //article 1:
      document.getElementsByClassName("title-article")[0].innerHTML=article[0].title
      document.getElementsByClassName("author-article")[0].innerHTML="Written by : " + article[0].author 
      document.getElementsByClassName("date-article")[0].innerHTML="Published at : " + article[0].publishedAt
      document.getElementsByClassName("description-article")[0].innerHTML=article[0].description
      document.getElementsByClassName("link-article")[0].href=article[0].url
      document.getElementsByClassName("img-article")[0].src=article[0].urlToImage
  
      //article 2: 
      document.getElementsByClassName("title-article")[0].innerHTML=article[1].title
      document.getElementsByClassName("author-article")[0].innerHTML="Written by : " + article[1].author 
      document.getElementsByClassName("date-article")[0].innerHTML="Published at : " + article[1].publishedAt
      document.getElementsByClassName("description-article")[0].innerHTML=article[1].description
      document.getElementsByClassName("link-article")[0].href=article[1].url
      document.getElementsByClassName("img-article")[0].src=article[1].urlToImage
  
      // article 3: 
      document.getElementsByClassName("title-article")[0].innerHTML=article[2].title
      document.getElementsByClassName("author-article")[0].innerHTML="Written by : " + article[2].author 
      document.getElementsByClassName("date-article")[0].innerHTML="Published at : " + article[2].publishedAt
      document.getElementsByClassName("description-article")[0].innerHTML=article[2].description
      document.getElementsByClassName("link-article")[0].href=article[2].url
      document.getElementsByClassName("img-article")[0].src=article[2].urlToImage
        
      } else { 

      const response = await fetch(`http://localhost:3000/news/${categorie}`);
      const data = await response.json();

      let article = data.articles
      

   

      //je veux changer mettre tech a la place de categorie 

      //article 1:
      document.getElementsByClassName('title-article')[0].innerHTML=article[0].title
      document.getElementsByClassName("author-article")[0].innerHTML="Written by : " + article[0].author 
      document.getElementsByClassName("date-article")[0].innerHTML="Published at : " + article[0].publishedAt
      document.getElementsByClassName("description-article")[0].innerHTML=article[0].description
      document.getElementsByClassName("link-article")[0].href=article[0].url 
      document.getElementsByClassName("img-article")[0].src=article[0].urlToImage
  
      //article 2: 
      document.getElementsByClassName("title-article")[0].innerHTML=article[1].title
      document.getElementsByClassName("author-article")[0].innerHTML="Written by : " + article[1].author 
      document.getElementsByClassName("date-article")[0].innerHTML="Published at : " + article[1].publishedAt
      document.getElementsByClassName("description-article")[0].innerHTML=article[1].description
      document.getElementsByClassName("link-article")[0].href=article[1].url
      document.getElementsByClassName("img-article")[0].src=article[1].urlToImage
  
      // article 3: 
      document.getElementsByClassName("title-article")[0].innerHTML=article[2].title
      document.getElementsByClassName("author-article")[0].innerHTML="Written by : " + article[2].author 
      document.getElementsByClassName("date-article")[0].innerHTML="Published at : " + article[2].publishedAt
      document.getElementsByClassName("description-article")[0].innerHTML=article[2].description
      document.getElementsByClassName("link-article")[0].href=article[2].url
      document.getElementsByClassName("img-article")[0].src=article[2].urlToImage
     } 
    } catch (error) {
      console.log(error.message)
    }
  }

  fetchNews()

// filtrage des news : 

  const linkTech = document.querySelector(".link-tech");
  function fetchTech(){
    fetchNews('tech')
  }
  linkTech.addEventListener("click",fetchTech) 


  const linkApp = document.querySelector(".link-app");
  function fetchApp(){
    fetchNews('app')
  }
  linkApp.addEventListener("click",fetchApp) 


  const linkJavascript = document.querySelector(".link-javascript");
  function fetchJavascript(){
    fetchNews('javascript')
  }
  linkJavascript.addEventListener("click",fetchJavascript) 

  const linkReact = document.querySelector(".link-react");
  function fetchReact(){
    fetchNews('react')
  }
  linkReact.addEventListener("click",fetchReact)
