
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
  const fetchNews = async (categorie) => {
    try {
      if (!categorie){
        const response = await fetch(`http://localhost:3000/news/tech`);
        const data = await response.json();
        console.log(data);
        
  
      let article = data.responseNews2.articles
  
      //article 1:
      document.getElementById("newsTitle1").innerHTML=article[0].title
      document.getElementById("author1").innerHTML="Written by : " + article[0].author 
      document.getElementById("date1").innerHTML="Published at : " + article[0].publishedAt
      document.getElementById("newsDescription1").innerHTML=article[0].description
      document.getElementById("link1").href=article[0].url
      document.getElementById("newsImage1").src=article[0].urlToImage
  
      //article 2: 
      document.getElementById("newsTitle2").innerHTML=article[1].title
      document.getElementById("author2").innerHTML="Written by : " + article[1].author 
      document.getElementById("date2").innerHTML="Published at : " + article[1].publishedAt
      document.getElementById("newsDescription2").innerHTML=article[1].description
      document.getElementById("link2").href=article[1].url
      document.getElementById("newsImage2").src=article[1].urlToImage
  
      // article 3: 
      document.getElementById("newsTitle3").innerHTML= article[2].title
      document.getElementById("author3").innerHTML="Written by : " + article[2].author 
      document.getElementById("date3").innerHTML="Published at : " + article[2].publishedAt
      document.getElementById("newsDescription3").innerHTML=article[2].description
      document.getElementById("link3").href=article[2].url
      document.getElementById("newsImage3").src=article[2].urlToImage
      }else {
      const response = await fetch(`http://localhost:3000/news/${categorie}`);
      const data = await response.json();
      console.log(data);
      

    let article = data.responseNews2.articles

    //article 1:
    document.getElementById("newsTitle1").innerHTML=article[0].title
    document.getElementById("author1").innerHTML="Written by : " + article[0].author 
    document.getElementById("date1").innerHTML="Published at : " + article[0].publishedAt
    document.getElementById("newsDescription1").innerHTML=article[0].description
    document.getElementById("link1").href=article[0].url
    document.getElementById("newsImage1").src=article[0].urlToImage

    //article 2: 
    document.getElementById("newsTitle2").innerHTML=article[1].title
    document.getElementById("author2").innerHTML="Written by : " + article[1].author 
    document.getElementById("date2").innerHTML="Published at : " + article[1].publishedAt
    document.getElementById("newsDescription2").innerHTML=article[1].description
    document.getElementById("link2").href=article[1].url
    document.getElementById("newsImage2").src=article[1].urlToImage

    // article 3: 
    document.getElementById("newsTitle3").innerHTML= article[2].title
    document.getElementById("author3").innerHTML="Written by : " + article[2].author 
    document.getElementById("date3").innerHTML="Published at : " + article[2].publishedAt
    document.getElementById("newsDescription3").innerHTML=article[2].description
    document.getElementById("link3").href=article[2].url
    document.getElementById("newsImage3").src=article[2].urlToImage
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  fetchNews()