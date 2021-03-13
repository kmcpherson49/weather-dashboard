
$("#search-btn").on("click", function(event) {
    event.preventDefault();
    var userInput = $("#search-city").val();
    console.log(userInput);
    currentWeather(userInput);
})
//WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
//var apiUrl = "https://api.github.com/users/" + user + "/repos";
function currentWeather(userInput) {
fetch("http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=fdde23134d934168e559d270bff585f8&units=imperial")
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var cityTitle = $("<h1>").addClass("card-title").text(data.name);
    var cityCard = $("<div>").addClass("card");
    var cityCardBody = $("<div>").addClass("card-body");
    var cityCardTemp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp +"°F");
    var cityCardHumidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
    var cityCardWind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + "MPH");
    //var cityLatitude = $("<p>").addClass("card-text").text("Latitude :" + data.coord.lat);
    //var cityLongitude = $("<p>").addClass("card-text").text("Longitude :" + data.coord.lon);
    // add uv index, might be in different data var cityCardTemp = $("<p>").addClass("card-text").text("current temperature" + data.main.temp);
    cityCardBody.append(cityTitle, cityCardTemp, cityCardHumidity, cityCardWind);
cityCard.append(cityCardBody);
$("#weather-info").append(cityCard);

  });
  forecast(userInput);
}

function forecast(userInput) {
    fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&cnt=5&appid=fdde23134d934168e559d270bff585f8")
.then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    //change for 5 day forecast, 5 cards & body date temp humidity
//     var cityTitle = $("<h1>").addClass("card-title").text(data.name);
//     var forecastCard = $("<div>").addClass("card");
//     var forecastCardBody = $("<div>").addClass("card-body");
//     var cityCardTemp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp +"°F");
//     var cityCardHumidity = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
//     var cityCardWind = $("<p>").addClass("card-text").text("Wind Speed: " + data.wind.speed + "MPH");
//     var cityLatitude = $("<p>").addClass("card-text").text("Latitude :" + data.coord.lat);
//     var cityLongitude = $("<p>").addClass("card-text").text("Longitude :" + data.coord.lon);
//     // add uv index, might be in different data var cityCardTemp = $("<p>").addClass("card-text").text("current temperature" + data.main.temp);
//     cityCardBody.append(cityTitle, cityCardTemp, cityCardHumidity, cityCardWind, cityLatitude, cityLongitude);
// cityCard.append(cityCardBody);
// $("#weather-info").append(cityCard);

  });
}






//WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//WHEN I view the UV index THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

//WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

//WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city