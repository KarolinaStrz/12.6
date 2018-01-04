var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
  	var countryName = $('#country-name').val();
}


function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
  countriesList.empty();
}

function showCountriesList(resp) {
countriesList.empty();
resp.forEach(function(item){
$('<ul>').text(item.name).appendTo(countriesList);
var FlagCode = item.alpha2Code.toLowerCase();
$('<li>').html('<img srcset="https://flags.fmcdn.net/data/flags/h40/' + FlagCode + '.png 15x" src="https://flags.fmcdn.net/data/flags/h20/' + FlagCode + '.png">').appendTo(countriesList);
$('<li>').text('Capital: ' + item.capital).appendTo(countriesList);
$('<li>').text('Land area: ' + item.area).appendTo(countriesList);
$('<li>').text('Population: ' + item.population).appendTo(countriesList);
$('<li>').text('Languages: ' + item.languages).appendTo(countriesList);


});

}
