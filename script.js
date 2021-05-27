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
  let humidity = document.querySelector(".humidity")
  let min = document.querySelector(".min")
  let max = document.querySelector(".max")

  temp.innerHTML = tempdata.main.temp;
  city.innerHTML = tempdata.name;
  country.innerHTML = tempdata.sys.country;
  status.innerHTML = tempdata.weather[0].description;
  humidity.textContent = tempdata.main.humidity;
  max.textContent = tempdata.main.temp_max;
  min.textContent = tempdata.main.temp_min;
  backgroundChange(getStatus.textContent)
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

// change background 
let getStatus = document.querySelector(".status")

function backgroundChange(status){
 switch(status){
   case (status = "broken clouds"): document.body.style.backgroundImage = "url('https://images.wallpaperscraft.com/image/clouds_sky_overcast_114918_1280x720.jpg')";
   break;
   case (status = "few clouds"): document.body.style.backgroundImage = "url('https://images.wallpaperscraft.com/image/sky_clouds_blue_white_clear_1273_1280x720.jpg')";
   break;
   case (status = "overcast clouds"):document.body.style.backgroundImage = "url('https://images.wallpaperscraft.com/image/clouds_cloudy_storm_172293_3840x2400.jpg')"
   break;
   case (status = "clear sky"):document.body.style.backgroundImage = "url('https://images.wallpaperscraft.com/image/clouds_sky_beautiful_174226_1600x1200.jpg')"
   break;
   case (status = "light rain"):document.body.style.backgroundImage = "url('https://images.wallpaperscraft.com/image/drops_rain_glass_water_clouds_83382_1600x1200.jpg')"
   break;
   case (status = "heavy intensity rain"):document.body.style.backgroundImage = "url('https://images.wallpaperscraft.com/image/lightning_sky_clouds_178365_3840x2400.jpg')"
   break;
 }
}





// if (getStatus == "scattered clouds"){
//   document.body.style.backgroundImage = "url('https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2018/01/clouds-19.jpg?itok=Qfa5j6NW')";
//   if (getStatus == "few clouds"){
//     document.body.style.backgroundImage = "url('https://cdn1.cloudpro.co.uk/sites/cloudprod7/files/2018/07/cloud.jpg')"
//     if (getStatus == "clear sky"){
//       document.body.style.backgroundImage = "url('https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/altocumulus.jpg')"
//       if (getStatus == "brocken clouds"){
//         document.body.style.backgroundImage = "url('https://cdn.wallpapersafari.com/84/18/FRml8X.jpg')"
      