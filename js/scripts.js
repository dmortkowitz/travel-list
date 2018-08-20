function Location (city, country) {
  this.cityName = city;
  this.countryName = country;
}

$(document).ready(function(){
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-cityLocation").val();
    var inputtedCountry = $("input#new-countryLocation").val();

    var newLocation = new Location(inputtedCity, inputtedCountry);
    $("")


  });
});
