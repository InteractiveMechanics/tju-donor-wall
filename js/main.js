/**
 * Loads data and initializes all functions
 * Data is scoped as a global variable
 */


var data = function() {};

$(function(){
	var per_page = 100;
	var page = 1;
	var allPosts = [];

	var retreivePosts = function() {
		var uri = plainData + '?per_page=' + per_page + '&page=' + page + '&orderby=title&order=asc';

		$.getJSON(uri, function(response, status, jqXHR) {
	
			var totalpages = jqXHR.getResponseHeader('x-wp-totalpages');

    		allPosts = allPosts.concat( response );

    		// here the magic happens
    		// if we are not done
    		if (page < totalpages) {
      			// request again, but for the next page
      			page++;
      			retreivePosts();
    		} else {
		    	Data.init(allPosts);
		     	Utilities.init();
				Leds.init();
				Panel.init();
				River.init();
				Animation.init();
				Search.init();

    		}

		}, 'json');

	}

	retreivePosts();


});

