Utilities = (function() {
	var timeout = [];
	var duration = 90000; //90000
    var longduration = 1800000;
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
        //timeout.push(setTimeout(resetBrowser, longduration));
        $('#instructions').html('');
        clearInterval(myInterval);
    }

    var resetInteractive = function() {
    	Panel.closePanel();
    	Search.closeSearch();
        River.resetRiver();
        //$('#river').css('left', 'initial');
        $('#river').animate({left: "0"}, "swing");
    	//Animation.myAnimation();
    	myInterval = setInterval(function(){ Animation.myAnimation(); }, 23000);
    	
    }



    var resetBrowser = function() {
        location.reload();
    }


    var bindEvents = function() {
         $(document).on('click tap drag swipeleft swiperight', resetTimeout);
         $(document).ready(resetInteractive);
    }




  	return {
        init: init
    }

})();

