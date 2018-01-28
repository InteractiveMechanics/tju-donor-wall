Animation = (function() {

	 var init = function() {
        bindEvents();
    }

    
    var myAnimation = function() {
        console.log('i am working');

        lottie.loadAnimation({
            container: document.getElementById('instructions'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../data/Jefferson-instructions.json'
        });
    }


    var bindEvents = function() {
        $(document).on('click', '.give', myAnimation);
    }


  	return {
        init: init
    }

})();
