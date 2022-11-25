

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



var d = new Date()
var i = 0

setInterval(function(){
console.log("test"+ i++)
},1000)