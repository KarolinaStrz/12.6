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
    resp.forEach(function(item) {
        //Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
    });
		resp.forEach(function(item){
   		$('<li>').text(item.name + item.flag).appendTo(countriesList);
		$('<ul>').text('Capital: ' + item.capital).appendTo(countriesList);
		$('<ul>').text('Land area: ' + item.area).appendTo(countriesList);
		$('<ul>').text('Population: ' + item.population).appendTo(countriesList);
		$('<ul>').text('Languages: ' + item.languages).appendTo(countriesList);
		$('<ul>').text('Currencies: ' + item.currencies).appendTo(countriesList);
	});

}
