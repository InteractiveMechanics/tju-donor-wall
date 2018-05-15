Utilities = (function() {
	var timeout = [];
	var duration = 150000; //90000
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
        if ($('.zoom').data('lightGallery')) {
            $('.zoom').data('lightGallery').destroy();
        }
      

    	//Animation.myAnimation();
    	myInterval = setInterval(function(){ 
            Animation.myAnimation(); 
            $('#instructions-text').removeClass('hidden fadeOut').addClass('fadeIn');
        }, 23000);
    	
    }



    var resetBrowser = function() {
        location.reload();
    }


    //callBack functions that call resetTimeout on each keyboard change in the search keyboards are in search.js
    //callback function that calls resetTimeout on the start of each drag of the river is in river.js
    //event that calls resetTimeout on each swipe of relationship slider is in panel.js
    var bindEvents = function() {
         $(document).on('click tap drag', resetTimeout); 
         $(document).ready(resetInteractive);
        
    }




  	return {
        init: init,
        resetTimeout: resetTimeout
    }

})();

