Animation = (function() {
    var timeout = [];
    var duration = 90000; //90000
    var myInterval;

	 var init = function() {
        bindEvents();
    }

    
    var myAnimation = function() {

        $('#instructions').html('');

        lottie.loadAnimation({
            container: document.getElementById('instructions'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../data/Jefferson-instructions.json'
        });

    }

    var bindEvents = function() {
    }



  	return {
        init: init,
        myAnimation: myAnimation
    }

})();
