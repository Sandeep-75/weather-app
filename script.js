// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// 9208023a9b99f19f048329f2011d7299
const weatherApi = {
    key:"9208023a9b99f19f048329f2011d7299",
    url:"https://api.openweathermap.org/data/2.5/weather?"

}
let getInput = document.querySelector(".input")
getInput.addEventListener("keyup",(e)=>{
    if(e.which === 13){
    let weatherData = getWetherData(getInput.value)
    weatherData.then((data)=>{
      showTemp(data)
      getDate()
    })
    }
    
})

function getWetherData(getInput){
  let res = fetch(`${weatherApi.url}q=${getInput}&appid=${weatherApi.key}&units=metric`)
  .then((response)=>{return response.json()})
  return res;
}

function showTemp(tempdata){
  let temp = document.querySelector(".temp");
  let city = document.querySelector(".city");
  let country = document.querySelector(".country");
  let status = document.querySelector(".status");
  let img = document.querySelector(".img");

  temp.innerHTML = tempdata.main.temp;
  city.innerHTML = tempdata.name;
  country.innerHTML = tempdata.sys.country;
  status.innerHTML = tempdata.weather[0].description;
  

}

function getDate(){
  let showDate = document.querySelector(".date");
  let arr = ["January", "February", "March","April","May","June","July","August","September","October","November","December"]
  let date = new Date();
  let year = date.getFullYear();
  let month = arr[date.getMonth()];
  let day = date.getDate();
  showDate.textContent = `${day} ${month} ${year}`
  
}


