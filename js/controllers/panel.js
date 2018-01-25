Panel = (function() {
	var close;
	var circle;
	var hammer;
    var mc;


	var init = function() {
        bindEvents();
    }


    var openPanel = function() {
    	circle = $('.circle');
    	mc = new Hammer(circle[0]);
    	mc.on("tap press", function(ev) {
    		$('#panel').removeClass('hidden fadeOutLeft').addClass('animated slideInLeft');
    	});
    }

    var closePanel = function() {
    	close = $('.panel-close');
    	mc = new Hammer(close[0]);
    	mc.on("tap press", function(ev) {
    		$('#panel').removeClass('slideInLeft').addClass('fadeOutLeft');
    		setTimeout(function(){ $('#panel').addClass('hidden'); }, 1000);
    	});
    }


    var bindEvents = function() {
       $(document).ready(openPanel);
       $(document).ready(closePanel);
    }


  	return {
        init: init
    }

})();
