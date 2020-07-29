
function updateWeather(lat, lon) {
  $.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: OpenWeatherKey,
    //q:     "San Antonio, US",
    lat: lat,
    lon: lon,
    units: "imperial",
    part: "daily"


  }).done(function (data) {
    console.log(data);

    reverseGeocode(lat, lon);
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
}

  mapboxgl.accessToken = mapboxKey;
  var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4936, 29.419], // starting position [lng, lat]
    zoom: 10 // starting zoom
  });

  var marker = new mapboxgl.Marker({
    draggable: true
  })
    .setLngLat([-98.493, 29.419])
    .addTo(map);

  marker.on('dragend', onDragEnd);
  updateWeather(29.419, -98.493)



function onDragEnd() {
  var lngLat = marker.getLngLat();
  coordinates.style.display = 'block';
  coordinates.innerHTML =
    'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;

  console.log(lngLat);
  updateWeather(lngLat.lat, lngLat.lng);
// take .done contents into own function
  // send data variable from .done to new method
  // make another ajax call inside on dragend using new longlat
  // send results through new method


}


const forecastWeather = function (latitude, longitude) {
  $.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: OpenWeatherKey,
    lat: latitude,
    lon: longitude,
    units: "imperial"

  }).done(card);
}

function NewLocation(){

}

function reverseGeocode(lat, lon){
$.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json`, {
  types: "place",
  access_token: mapboxKey
}).done(function(data){
  $('#place').text(data.features[0].place_name);
  console.log(data);
})
}

var geocoder = new MapboxGeocoder({ // Initialize the geocoder
  accessToken: mapboxgl.accessToken, // Set the access token
  mapboxgl: mapboxgl, // Set the mapbox-gl instance
  marker: false, // Do not use the default marker style

});


 geocoder.on("results", function(lat) {
(lat.config.proximity[1], lat.config.proximity[0])
   console.log("potato");
   console.log(lat.config.proximity);
console.log(lat);
 });




// Add the geocoder to the map
map.addControl(geocoder);
//
// placeholder: 'Search for places in Berkeley
//
// const geocode = function (searchInfo) {
//   // Call/Query MapBox API to obtain the response object with the necessary map information
//   $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchInfo}.json`, {
//     access_token: OpenWeatherKey,
//     types: [ "place", "address" ]
//   }).done(geocodeHandler);
// }
//Once you’ve acquired the new Latitude/Longitude after the marker has been moved,
// you can make another AJAX call using those coordinates,
// and send the resulting data as an argument into a separate function
// (named whatever you want it to be) - and use that function to update your HTML elements.
