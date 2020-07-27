//

$.get("http://api.openweathermap.org/data/2.5/onecall", {
  APPID: OpenWeatherKey,
 //q:     "San Antonio, US",
  lat: 29.419,
  lon: -98.4936,
  units: "imperial",
  part: "daily"
}).done(function(data) {
  console.log(data);
  for (let i = 0; i < 5; i++) {
    let cardId = "#card-" + i
    //date
//assign the Date String to #weather-date
    let date = new Date(data.daily[i].dt * 1000);
    $("#weatherDate-" + i).html(date.toDateString());
    console.log(data.daily[i].dt)
    //temp
    let highTemp = data.daily[i].temp.max;
    let lowTemp = data.daily[i].temp.min;
//$('#weather-date').html(date.toDateString());
    $("#highLowTemp-" + i).html(lowTemp + "°F/ " + highTemp + "°F");
    console.log(data.daily[i].temp);
    //feels like
    let feelsLike = data.daily[i].feels_like.day;
    $("#feelsLike-" + i).html(feelsLike + "%");
    console.log(data.daily[i].feels_like)
    //humidity
    let humidity = data.daily[i].humidity;
    $("#humidity-" + i).html(humidity + "°F");
    console.log(data.daily[i].humidity)
    //
    let wind = data.daily[i].wind_speed;
    $("#wind-" + i).html(wind + " MPH");
    console.log(data.daily[i].wind_speed)
    //
    let pressure = data.daily[i].pressure;
    $("#pressure-" + i).html(pressure + " mBAR");
    console.log(data.daily[i].pressure)
  }
});


mapboxgl.accessToken = mapboxKey;
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  zoom: 10,
  center: [-98.4916, 29.4252]
});



