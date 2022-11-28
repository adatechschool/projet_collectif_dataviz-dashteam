
const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.log(error.message);
  }
};

fetchData();

// faire un bouton TECH dans le html et quand on clic alors lancer la fonction TECH (qui ajoute TECH a la fin de l'url derriere news)

  const fetchNewsTech = async () => {
    try {
      const response = await fetch("http://localhost:3000/news/tech");
      const data = await response.json();
      console.log(data);
      
    //article 1:
    document.getElementById("newsTitle1").innerHTML=data.apiNews.articles[0].title
    document.getElementById("author1").innerHTML="Written by : " + data.apiNews.articles[0].author 
    document.getElementById("date1").innerHTML="Published at : " + data.apiNews.articles[0].publishedAt
    document.getElementById("newsDescription1").innerHTML=data.apiNews.articles[0].description
    document.getElementById("link1").href=data.apiNews.articles[0].url
    document.getElementById("newsImage1").src=data.apiNews.articles[0].urlToImage

    //article 2: 
    document.getElementById("newsTitle2").innerHTML=data.apiNews.articles[1].title
    document.getElementById("author2").innerHTML="Written by : " + data.apiNews.articles[1].author 
    document.getElementById("date2").innerHTML="Published at : " + data.apiNews.articles[1].publishedAt
    document.getElementById("newsDescription2").innerHTML=data.apiNews.articles[1].description
    document.getElementById("link2").href=data.apiNews.articles[1].url
    document.getElementById("newsImage2").src=data.apiNews.articles[1].urlToImage

    // article 3: 
    document.getElementById("newsTitle3").innerHTML=data.apiNews.articles[2].title
    document.getElementById("author3").innerHTML="Written by : " + data.apiNews.articles[2].author 
    document.getElementById("date3").innerHTML="Published at : " + data.apiNews.articles[2].publishedAt
    document.getElementById("newsDescription3").innerHTML=data.apiNews.articles[2].description
    document.getElementById("link3").href=data.apiNews.articles[2].url
    document.getElementById("newsImage3").src=data.apiNews.articles[2].urlToImage
    } catch (error) {
      console.log(error.message)
    }
  }

  fetchNewsTech()

  const fetchNewsApp = async () => {
    try {
      const response = await fetch("http://localhost:3000/news/app");
      const data = await response.json();
      console.log(data);
      
    //article 1:
    document.getElementById("newsTitle1").innerHTML=data.apiNews.articles[0].title
    document.getElementById("author1").innerHTML="Written by : " + data.apiNews.articles[0].author 
    document.getElementById("date1").innerHTML="Published at : " + data.apiNews.articles[0].publishedAt
    document.getElementById("newsDescription1").innerHTML=data.apiNews.articles[0].description
    document.getElementById("link1").href=data.apiNews.articles[0].url
    document.getElementById("newsImage1").src=data.apiNews.articles[0].urlToImage

    //article 2: 
    document.getElementById("newsTitle2").innerHTML=data.apiNews.articles[1].title
    document.getElementById("author2").innerHTML="Written by : " + data.apiNews.articles[1].author 
    document.getElementById("date2").innerHTML="Published at : " + data.apiNews.articles[1].publishedAt
    document.getElementById("newsDescription2").innerHTML=data.apiNews.articles[1].description
    document.getElementById("link2").href=data.apiNews.articles[1].url
    document.getElementById("newsImage2").src=data.apiNews.articles[1].urlToImage

    // article 3: 
    document.getElementById("newsTitle3").innerHTML=data.apiNews.articles[2].title
    document.getElementById("author3").innerHTML="Written by : " + data.apiNews.articles[2].author 
    document.getElementById("date3").innerHTML="Published at : " + data.apiNews.articles[2].publishedAt
    document.getElementById("newsDescription3").innerHTML=data.apiNews.articles[2].description
    document.getElementById("link3").href=data.apiNews.articles[2].url
    document.getElementById("newsImage3").src=data.apiNews.articles[2].urlToImage
    } catch (error) {
      console.log(error.message)
    }
  }

fetchNewsApp()


const fetchNewsJavascript = async () => {
  try {
    const response = await fetch("http://localhost:3000/news/javascript");
    const data = await response.json();
    console.log(data);
    
  //article 1:
  document.getElementById("newsTitle1").innerHTML=data.apiNews.articles[0].title
  document.getElementById("author1").innerHTML="Written by : " + data.apiNews.articles[0].author 
  document.getElementById("date1").innerHTML="Published at : " + data.apiNews.articles[0].publishedAt
  document.getElementById("newsDescription1").innerHTML=data.apiNews.articles[0].description
  document.getElementById("link1").href=data.apiNews.articles[0].url
  document.getElementById("newsImage1").src=data.apiNews.articles[0].urlToImage

  //article 2: 
  document.getElementById("newsTitle2").innerHTML=data.apiNews.articles[1].title
  document.getElementById("author2").innerHTML="Written by : " + data.apiNews.articles[1].author 
  document.getElementById("date2").innerHTML="Published at : " + data.apiNews.articles[1].publishedAt
  document.getElementById("newsDescription2").innerHTML=data.apiNews.articles[1].description
  document.getElementById("link2").href=data.apiNews.articles[1].url
  document.getElementById("newsImage2").src=data.apiNews.articles[1].urlToImage

  // article 3: 
  document.getElementById("newsTitle3").innerHTML=data.apiNews.articles[2].title
  document.getElementById("author3").innerHTML="Written by : " + data.apiNews.articles[2].author 
  document.getElementById("date3").innerHTML="Published at : " + data.apiNews.articles[2].publishedAt
  document.getElementById("newsDescription3").innerHTML=data.apiNews.articles[2].description
  document.getElementById("link3").href=data.apiNews.articles[2].url
  document.getElementById("newsImage3").src=data.apiNews.articles[2].urlToImage
  } catch (error) {
    console.log(error.message)
  }
}

fetchNewsJavascript()