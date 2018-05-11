Animation = (function() {
    var timeout = [];
    var duration = 90000; //90000
    var myInterval;
    var anim;

	 var init = function() {
        bindEvents();
    }

    
    var myAnimation = function() {

        $('#instructions').html('');

        anim = lottie.loadAnimation({
            container: document.getElementById('instructions'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: '../data/Jefferson-instructions.json'
            });

        anim.play();
        anim.addEventListener('complete', hideText);
       // console.log('my Animation');

    }

    var hideText = function() {
        console.log('hide text');
        $('#instructions-text').addClass('fadeOut').removeClass('fadeIn');
        setTimeout(function() { $('#instructions-text').addClass('hidden')}, 750);
    }

    var bindEvents = function() {
    }



  	return {
        init: init,
        myAnimation: myAnimation
    }

})();
