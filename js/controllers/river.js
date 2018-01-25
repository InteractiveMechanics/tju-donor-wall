River = (function() {

	 var init = function() {
        bindEvents();
    }

    
    var helloworld = function() {
    	alert('hello, world!');
    }



    var bindEvents = function() {
    	$(document).ready(helloworld);
    }


  	return {
        init: init
    }

})();
