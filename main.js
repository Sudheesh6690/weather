function search(){
    place=pname.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(data => data.json())
    .then(data=> displayData (data))

}

function displayData(weatherUpdate){
    placeName=weatherUpdate.placeName
    windspeed=weatherUpdate
    description=weatherUpdate.weather[0].description
    wind=weatherUpdate.wind.speed 
    humidity=weatherUpdate.main.humidity

    var tempKelvin=weatherUpdate.main.temp_max
    var celsius= Math.round(tempKelvin-273.15)


    

    result.innerHTML =
`<div class= card text-center style="width: 16rem;>
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${placeName}</h5>
    <p class="card-text></p>
  </div>
  <ul class="list-group list-group-flush bg-transparent">
  <li class="list-group-item">Temperature: ${celsius}°C</li>
  <br>
<li class="list-group-item">Clouds:${description}</li>
<br>
<li class="list-group-item"> Wind speed:${wind}km/h</li>
<br>
<li class="list-group-item">Humidity:${humidity}%</li>
</ul>
</div>`
}




