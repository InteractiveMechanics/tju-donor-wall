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
            $('#gallery-lg').append(active + '<div class="zoom"><img src="assets/icons/icon-zoom.svg"></div>');

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
    	

        $('.donor').each( function() {
            var $this = $(this);
            var h = new Hammer(this);
            h.on("tap press", function() {
                if ($this.hasClass('large')) {
                    $('#gallery-wrapper').removeClass('hidden');
                } 
              
                $('#panel').removeClass('hidden fadeOutLeft').addClass('animated slideInLeft flex-container');
                $(this).addClass('active');
                $('main').addClass('close-panel');

            });
        });


    }


    var openGive = function() {
        $('#right-panel').removeClass('hidden fadeOutRight').addClass('animated slideInRight flex-container');  
        $('#give-panel').removeClass('hidden');
        $('#search-btn').addClass('animated fadeOut');

        setTimeout(function(){ $('#search-close').addClass('animated fadeIn').removeClass('fadeOut').css('display', 'flex'); }, 750);
        $('main').addClass('close-panel');

    }

   
    
    var closePanel = function() {
        $('#panel').removeClass('slideInLeft').addClass('fadeOutLeft');
        $('#gallery-wrapper').addClass('hidden');
    }


    var createLightGallery = function() {
        var myArray = [{
                'src': 'assets/sample-images/sample-image@2x.jpg',
                'thumb': 'assets/sample-images/sample-image@2x.jpg'
            }, {
                'src': 'https://picsum.photos/200/300',
                'thumb': 'https://picsum.photos/200/300'
            }, {
                'src': 'https://picsum.photos/400/600',
                'thumb': 'https://picsum.photos/400/600'
            }, {
                'src': 'https://picsum.photos/600/400',
                'thumb': 'https://picsum.photos/600/400'
            }, {
                'src': 'https://picsum.photos/300/500',
                'thumb': 'https://picsum.photos/300/500'
            }];

        var activeItem = $('.active').attr('data-src');
        console.log(activeItem);
        var myIndex = myArray.map(function(e) { return e.src; }).indexOf(activeItem);

        $('.zoom').lightGallery({
            dynamic: true,
            dynamicEl: myArray,
            download: false,
            index: myIndex
        });

       
       console.log(myIndex);       
       //$('.zoom').data('lightGallery').slide(index);


    }




    var bindEvents = function() {
       $(document).ready(openPanel);
       $(document).ready(featureImg);
       $(document).on('click tap', '.close', closePanel);
       $(document).on('click tap', '.give', openGive);
       $(document).on('click tap', '.zoom', createLightGallery);
    }


  	return {
        init: init
    }

})();
