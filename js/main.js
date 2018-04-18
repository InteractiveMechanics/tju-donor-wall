/**
 * Loads data and initializes all functions
 * Data is scoped as a global variable
 */


var data = function() {};

$(function(){
	$.get(plainData, function(response) {
	Data.init(response);

	Utilities.init();
	Leds.init();
	Panel.init();
	River.init();
	Animation.init();
	Search.init();


	}, 'json');

});

