Animation = (function() {
    var timeout = [];
    var duration = 30000; //90000
    var longduration = 900000;


	 var init = function() {
        bindEvents();
    }

    
    var myAnimation = function() {
        console.log('i am working');

        $('#instructions').html('');

        lottie.loadAnimation({
            container: document.getElementById('instructions'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../data/Jefferson-instructions.json'
        });
    }

    var resetTimeout = function() {
        if (timeout) {
            $.each(timeout, function(index, value){
                clearTimeout(value);
                timeout.splice(index, 1);
            });
        }
        timeout.push(setTimeout(myAnimation, duration));
    }


    var bindEvents = function() {
        $(document).on('click tap drag', resetTimeout);
        //$(document).on('click', '.give', myAnimation);
    }


  	return {
        init: init
    }

})();
