

$.get("http://api.openweathermap.org/data/2.5/onecall", {
  APPID: OpenWeatherKey,
 //q:     "San Antonio, US",
  lat: 29.419,
  lon: -98.4936,
  units: "imperial"
}).done(function(data) {
  console.log(data);

  for (let i = 0; i < 5; i++) {
    let cardId = '#card' + i
    //date
//assign the Date String to #weather-date
    let date = new Date(data.daily[i].dt * 1000);
    $(cardId + " #weatherDate").html(date.toDateString());
    console.log(data.daily[i].dt)
    //temp
    let highTemp = data.daily[i].temp.max;
    let lowTemp = data.daily[i].temp.min;
//$('#weather-date').html(date.toDateString());
    $(cardId + "#highLowTemp").html(lowTemp + "°F/ " + highTemp + "°F");
    console.log(date.daily[i].temp);
    //feels like
    let feelsLike = data.daily[i].feels_like.day;
    $(cardId + " #feelsLike").html(feelsLike + "%");
    console.log(data.daily[i].feels_like)
    //humidity
    let humidity = data.daily[i].humidity;
    $(cardId + " #feelsLike").html(humidity + "°F");
    console.log(data.daily[i].humidity)
    //
    let wind = data.daily[i].wind;
    $(cardId + " #wind").html(wind + " MPH");
    console.log(data.daily[i].wind_speed)
    //
    let pressure = data.daily[i].pressure;
    $(cardId + " #pressure").html(pressure + " mBAR");
    console.log(data.daily[i].pressure)

//$('#weather-date').html(date.toDateString());
//$('#high-low-temp').html(lowTemp + '°F/ ' + highTemp + '°F');


  }
});

//
// $('#high-low-temp').click(function(){
//   $(this).css('color', 'blue');
//   // border
//   // border radius
//   // padding
//   // background

//$(' #=id selector (id, class, tag) ').
