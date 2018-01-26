River = (function() {

	 var init = function() {
        bindEvents();
    }

    
    var helloworld = function() {
    	console.log('hello, world!');
    }



    var bindEvents = function() {
    	$(document).ready(helloworld);
    }


  	return {
        init: init
    }

})();
