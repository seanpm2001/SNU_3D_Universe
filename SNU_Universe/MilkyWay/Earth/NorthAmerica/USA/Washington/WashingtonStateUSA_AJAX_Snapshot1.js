// Washington AJAX script for SNU Universe
// Initialize the HTTP request.
// Sampled from Wikipedia
var xhr = new XMLHttpRequest();
// Walla Walla
console.log('Welcome to Washington State [United States of America]');
console.log('Explore a city');
xhr.open('GET', 'send-ajax-data.php');

// Track the state changes of the request.
xhr.onreadystatechange = function () {
	var DONE = 4; // readyState 4 means the request is done.
	var OK = 200; // status 200 is a successful return.
	if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			console.log(xhr.responseText); // 'This is the output.'
		} else {
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
};
// Spokane
console.log('Spokane - Washington (USA)');
// Dixie
console.log('Dixie - Washington (USA)');
// Waitsburg
console.log('Waitsburg - Washington (USA)');
// Tri-cities

// Yakima

// Tacoma

// Seattle

// Vancouver

// Bellevue

// Everett

// Kent

// Aberdeen

// Airway heights

// Algona

// Anacortes

// Arlington

// Auburn

// Bainbridge island

// Battle ground

// Bellingham

// Benton city

// Bingen

// Black diamond

// Blaine

// Bonney Lake

// Bothell

// Send the request to send-ajax-data.php
xhr.send(null);
/* // Future PHP injection into main page
<?php
// This is the server-side script.

// Set the content type.
header('Content-Type: text/plain');

// Send the data back.
echo "This is the output.";
?>
*/
/* Sources:
https://en.wikipedia.org/wiki/List_of_cities_and_towns_in_Washington
https://en.wikipedia.org/wiki/Ajax_(programming)
*/
/* File info
Version 1 (October 4th 2019)
First version: 1 (October 4th 2019)
Latest version: 1 (October 4th 2019)
Type: .js AJAX script
*/