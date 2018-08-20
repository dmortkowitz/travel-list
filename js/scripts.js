//backend logic

function Location (city, country) {
  this.cityName = city;
  this.countryName = country;
}


//frontend logic
$(document).ready(function(){
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-cityLocation").val();
    var inputtedCountry = $("input#new-countryLocation").val();

    var newLocation = new Location(inputtedCity, inputtedCountry);
    $("ul#locations").append("<li><span class='contact'>" + newLocation.cityName + "</span></li>");

    $("input#new-cityLocation").val();
    $"input#new-countryLocation").val();

  });
});
