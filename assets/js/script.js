$("#search-btn").on("click", function (event) {
  event.preventDefault();
  var userInput = $("#search-city").val();
  
  //localStorage.setItem(userInput);
  currentWeather(userInput);
  //loadCity(userInput);

});

// var loadCity = function (userInput) {
//     var storedCity = localStorage.getItem(userInput)
//     $("#search-history").val(storedCity);
// }
//WHEN I search for a city THEN I am presented with current and future conditions for that city and that city is added to the search history
//var apiUrl = "https://api.github.com/users/" + user + "/repos";
function currentWeather(userInput) {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      userInput +
      "&appid=fdde23134d934168e559d270bff585f8&units=imperial"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var cityTitle = $("<h1>").addClass("card-title").text(data.name);
      //var cityDate = $("<p>").addclass("city-date").text(moment().format("MMM D YYYY"));
      var cityCard = $("<div>").addClass("card");
      var cityCardBody = $("<div>").addClass("card-body");
      var cityCardTemp = $("<p>")
        .addClass("card-text")
        .text("Temperature: " + data.main.temp + "°F");
      var cityCardHumidity = $("<p>")
        .addClass("card-text")
        .text("Humidity: " + data.main.humidity + "%");
      var cityCardWind = $("<p>")
        .addClass("card-text")
        .text("Wind Speed: " + data.wind.speed + "MPH");
      cityCardBody.append(
        cityTitle,
        //cityDate,
        cityCardTemp,
        cityCardHumidity,
        cityCardWind
      );
      cityCard.append(cityCardBody);
      $("#weather-info").append(cityCard);
    });
  forecast(userInput);
}

function forecast(userInput) {
  fetch(
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
      userInput +
      "&cnt=5&appid=fdde23134d934168e559d270bff585f8&units=imperial"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //change for 5 day forecast, 5 cards & body date temp humidity
      //first day
      // var forecastTitle = $("<h1>").addClass("card-title").text(data.list[0].clouds.dt_txt);
      // console.log(forecastTitle)
      var firstForecastCard = $("<div>").addClass("card-1");
      var firstForecastCardBody = $("<div>").addClass("card-body");
      var firstForecastDay = $("<p>").addClass("dayText").text("Day 1");
      var firstForecastCardDate = $("<p>")
        .addClass("card-text")
        .text(data.list[0].dt_txt);
      var firstForecastCardTemp = $("<p>")
        .addClass("card-text")
        .text("Temperature: " + data.list[0].main.temp + "°F");
      var firstForecastCardHumidity = $("<p>")
        .addClass("card-text")
        .text("Humidity: " + data.list[0].main.humidity + "%");
      firstForecastCardBody.append(
        firstForecastDay,
        firstForecastCardDate,
        firstForecastCardTemp,
        firstForecastCardHumidity
      );
      firstForecastCard.append(firstForecastCardBody);
      $("#5-day-forecast").append(firstForecastCard);

      //second day
      var secondForecastCard = $("<div>").addClass("card-2");
      var secondForecastCardBody = $("<div>").addClass("card-body");
      var secondForecastDay = $("<p>").addClass("dayText").text("Day 2");
      var secondForecastCardDate = $("<p>")
        .addClass("card-text")
        .text(data.list[1].dt_txt);
      var secondForecastCardTemp = $("<p>")
        .addClass("card-text")
        .text("Temperature: " + data.list[1].main.temp + "°F");
      var secondForecastCardHumidity = $("<p>")
        .addClass("card-text")
        .text("Humidity: " + data.list[1].main.humidity + "%");
      secondForecastCardBody.append(
        secondForecastDay,
        secondForecastCardDate,
        secondForecastCardTemp,
        secondForecastCardHumidity
      );
      secondForecastCard.append(secondForecastCardBody);
      $("#5-day-forecast").append(secondForecastCard);

      //third day
      var thirdForecastCard = $("<div>").addClass("card-3");
      var thirdForecastCardBody = $("<div>").addClass("card-body");
      var thirdForecastDay = $("<p>").addClass("dayText").text("Day 3");
      var thirdForecastCardDate = $("<p>")
        .addClass("card-text")
        .text(data.list[2].dt_txt);
      var thirdForecastCardTemp = $("<p>")
        .addClass("card-text")
        .text("Temperature: " + data.list[2].main.temp + "°F");
      var thirdForecastCardHumidity = $("<p>")
        .addClass("card-text")
        .text("Humidity: " + data.list[2].main.humidity + "%");
      thirdForecastCardBody.append(
        thirdForecastDay,
        thirdForecastCardDate,
        thirdForecastCardTemp,
        thirdForecastCardHumidity
      );
      thirdForecastCard.append(thirdForecastCardBody);
      $("#5-day-forecast").append(thirdForecastCard);

      //fourth day
      var fourthForecastCard = $("<div>").addClass("card-4");
      var fourthForecastCardBody = $("<div>").addClass("card-body");
      var fourthForecastDay = $("<p>").addClass("dayText").text("Day 4");
      var fourthForecastCardDate = $("<p>")
      .addClass("card-text")
      .text(data.list[3].dt_txt);
      var fourthForecastCardTemp = $("<p>")
        .addClass("card-text")
        .text("Temperature: " + data.list[3].main.temp + "°F");
      var fourthForecastCardHumidity = $("<p>")
        .addClass("card-text")
        .text("Humidity: " + data.list[3].main.humidity + "%");
      fourthForecastCardBody.append(
        fourthForecastDay,
        fourthForecastCardDate,
        fourthForecastCardTemp,
        fourthForecastCardHumidity
      );
      fourthForecastCard.append(fourthForecastCardBody);
      $("#5-day-forecast").append(fourthForecastCard);

      //fifth day
      var fifthForecastCard = $("<div>").addClass("card-5");
      var fifthForecastCardBody = $("<div>").addClass("card-body");
      var fifthForecastDay = $("<p>").addClass("dayText").text("Day 5");
      var fifthForecastCardDate = $("<p>")
      .addClass("card-text")
      .text(data.list[4].dt_txt);
      var fifthForecastCardTemp = $("<p>")
        .addClass("card-text")
        .text("Temperature: " + data.list[4].main.temp + "°F");
      var fifthForecastCardHumidity = $("<p>")
        .addClass("card-text")
        .text("Humidity: " + data.list[4].main.humidity + "%");
      fifthForecastCardBody.append(
        fifthForecastDay,
        fifthForecastCardDate,
        fifthForecastCardTemp,
        fifthForecastCardHumidity
      );
      fifthForecastCard.append(fifthForecastCardBody);
      $("#5-day-forecast").append(fifthForecastCard);
    });

}

//loadCity();

//WHEN I view current weather conditions for that city THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//WHEN I view the UV index THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

//WHEN I view future weather conditions for that city THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity

//WHEN I click on a city in the search history THEN I am again presented with current and future conditions for that city
