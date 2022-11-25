
const fetchData = async () => {
  try {

    const response = await fetch("http://localhost:3000/");
    const data = await response.json();
    console.log("reponse --->", data);
    document.getElementById("ville").innerHTML= data.apiWeather.name 
    document.getElementById('temperature').innerHTML= Math.round(data.apiWeather.main.temp)+" °C"
    //console.log(document.getElementById('weather_icon').innerHTML = data.apiWeather.weather[0].icon )


  // conditions d'affichage des icones meteo en fonction du code de l'icone:
  let icon = data.apiWeather.weather[0].icon 
  if (icon === '01d') {
    document.querySelector('img').src='http://openweathermap.org/img/wn/01d@2x.png'
  } 
  if (icon === '02d') {
    document.querySelector('img').src='http://openweathermap.org/img/wn/02d@2x.png'
  } 
  if (icon === '03d'|| icon ==='04d') {
    document.querySelector('img').src='http://openweathermap.org/img/wn/04d@2x.png'
  } 
  if (icon === '09d'|| icon ==='10d') {
    document.querySelector('img').src='http://openweathermap.org/img/wn/09d@2x.png'
  } 
  if (icon == '11d') {
    document.querySelector('img').src='http://openweathermap.org/img/wn/11d@2x.png'
  } 

  
  } catch (error) {
    console.log(error.message);
  }
}; 


fetchData(); 

// faire des conditions if le code de l'icone s'affiche, then affiche l'image dans la balise html 
