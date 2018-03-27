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
        $('#instructions-wrapper').html('');
        $('#instruction-text').addClass('fadeOut hidden');
        clearInterval(myInterval);
    }

    var resetInteractive = function() {
    	Panel.closePanel();
    	Search.closeSearch();
        River.resetRiver();
       $('.zoom').data('lightGallery').destroy();
        //$('#river').css('left', 'initial');
        $('#river').animate({left: "0"}, "swing");

    	//Animation.myAnimation();
    	myInterval = setInterval(function(){ 
            Animation.myAnimation(); 
            $('#instructions-text').removeClass('hidden fadeOut').addClass('fadeIn');
        }, 23000);
    	
    }



    var resetBrowser = function() {
        location.reload();
    }

    var disableZoom = function(e) {
        e.preventDefault();
    }


    var bindEvents = function() {
         $(document).on('click tap drag swipeleft swiperight', resetTimeout);
         $(document).ready(resetInteractive);
         $(document).on('gesturestart', disableZoom);
        
    }




  	return {
        init: init
    }

})();

