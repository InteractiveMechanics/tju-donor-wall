Utilities = (function() {
	var timeout = [];
	var duration = 30000; //90000
    var longduration = 900000;
    var myInterval;

	 var init = function() {
        bindEvents();
    }

    var resetTimeout = function() {
    	if (timeout) {
            $.each(timeout, function(index, value){
                clearTimeout(value);
                timeout.splice(index, 1);
            });
        }
        timeout.push(setTimeout(resetInteractive, duration));
        timeout.push(setTimeout(resetBrowser, longduration));
        $('#instructions').html('');
        clearInterval(myInterval);
    }

    var resetInteractive = function() {
    	Panel.closePanel();
    	Search.closeSearch();
    	Animation.myAnimation();
    	myInterval = setInterval(function(){ Animation.myAnimation(); }, 30000);
    	
    }






     var resetBrowser = function() {
        location.reload();
    }


    var bindEvents = function() {
         $(document).on('click tap drag', resetTimeout);
    }




  	return {
        init: init
    }

})();

