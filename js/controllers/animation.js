Animation = (function() {
    var timeout = [];
    var duration = 90000; //90000
    var myInterval;
    //var longduration = 000;


	 var init = function() {
        bindEvents();
    }

    
    var myAnimation = function() {
        console.log('myAnimation is running');

        $('#instructions').html('');

        lottie.loadAnimation({
            container: document.getElementById('instructions'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../data/Jefferson-instructions.json'
        });

    }

    // var setAnimationInterval = function() {
    //     myInterval = setInterval(function(){ myAnimation(); }, 30000);
    // }

    // var stopAnimationInterval = function() {
    //     clearInterval(myInterval);
    // }

    // var stopAnimation = function() {
    //    $('#instructions').html('');
    //    stopAnimationInterval();
    // }

    var bindEvents = function() {
        //$(document).on('click tap drag', stopAnimation);
    }


  	return {
        init: init,
        myAnimation: myAnimation
    }

})();
