Panel = (function() {
	var close;
	var circle;
	var hammer;
    var mc;
    var h;


	var init = function() {
        bindEvents();
    }


    var killHammer = function() {
        if (h) {
            h.destroy();
        }
    }

    var testingTheThing = function() {
        console.log('this works yay');
    }

    var enableRelSlider = function() {
        console.log('enableRelSlider');
        $('#relationships').slick({
            dots: false,
            arrows: false,
            centerMode: true,
            slidesToShow: 2
        })
    }

    var enableGallery = function() {
        console.log('enableGallerySlider');
        var active = $('.active').html();
        if (active) {
            console.log('if active this')
            $('#gallery-lg').append(active);
        } else {
            console.log('if active else');
            $( ".gallery-item" ).first().addClass('active');
            enableGallery();
        }
    }

    var featureImg = function() {
            $('.gallery-item').each( function() {
            var $this = $(this);
            var h = new Hammer(this);
            h.on("tap press", function() {
                $('#gallery-lg').html('');
                $('.gallery-item').removeClass('active');
                $this.addClass('active');
                enableGallery();
            });
        });
    }


    

    var openPanel = function() {
        enableRelSlider();
        enableGallery();
    	

        $('.circle').each( function() {
            var $this = $(this);
            var h = new Hammer(this);
            h.on("tap press", function() {
                if ($this.hasClass('lg')) {
                    $('#gallery-wrapper').removeClass('hidden');
                } 
              
                $('#panel').removeClass('hidden fadeOutLeft').addClass('animated slideInLeft flex-container');
                $(this).addClass('active');
                $('main').addClass('close-panel');

            });
        });


    }

    var closePanel = function() {
        $('#panel').removeClass('slideInLeft').addClass('fadeOutLeft');
        $('#gallery-wrapper').addClass('hidden');
    	// close = $('.testing');
    	// mc = new Hammer(close[0]);
    	// mc.on("tap press", function() {
    	// 	//$('#panel').removeClass('slideInLeft').addClass('fadeOutLeft');
    	// 	//setTimeout(function(){ $('#panel').addClass('hidden'); }, 1000);
     //        console.log('closePanel is working');
    	// });
    }

    var bindEvents = function() {
       $(document).ready(openPanel);
       $(document).ready(featureImg);
       $(document).on('click tap', '.close', closePanel);
    }


  	return {
        init: init
    }

})();
