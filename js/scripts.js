//backend logic

function Location (city, country, notes) {
  this.cityName = city;
  this.countryName = country;
  this.travelNotes = notes;
}
Location.prototype.fullLocation = function () {
  return this.cityName + " " + this.countryName;
}


//frontend logic
$(document).ready(function(){
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputtedCity = $("input#new-cityLocation").val();
    var inputtedCountry = $("input#new-countryLocation").val();
    var inputtedNotes = $("input#new-notes").val();

    var newLocation = new Location(inputtedCity, inputtedCountry, inputtedNotes);
    $("ul#locations").append("<li><span class='location'>" + newLocation.fullLocation() + "</span></li>");

    $("input#new-cityLocation").val("");
    $("input#new-countryLocation").val("");
    $("input#new-notes").val("");

    $(".location").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(newLocation.cityName);
      $(".city-name").text(newLocation.cityName);
      $(".country-name").text(newLocation.countryName);
      $(".output-notes").text(newLocation.travelNotes);
    });

  });
});
