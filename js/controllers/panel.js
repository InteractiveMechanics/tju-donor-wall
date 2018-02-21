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
                    $('#close').css('width', 'calc(100vw - 1300px');
                }  else {
                     $('#close').css('width', 'calc(100vw - 650px');
                }
              
                $('#panel').removeClass('hidden fadeOutLeft').addClass('animated slideInLeft flex-container');
                $(this).addClass('active');
                $('main').addClass('close-panel');
                Search.closeSearch();
                setTimeout(function() { openTheClose(); }, 750);

            });
        });


    }


    var openGive = function() {
        $('#right-panel').removeClass('hidden fadeOutRight').addClass('animated slideInRight flex-container'); 
        $('#search').addClass('hidden'); 
        $('#give-panel').removeClass('hidden');
        $('#search-btn').addClass('animated fadeOut');

        setTimeout(function(){ $('#search-close').addClass('animated fadeIn').removeClass('fadeOut').css('display', 'flex'); }, 750);
        $('main').addClass('close-panel');

    }


    
    var closePanel = function() {
        $('#panel').removeClass('slideInLeft').addClass('fadeOutLeft');
        $('#close').removeClass('fadeIn').addClass('hidden');
        $('#gallery-wrapper').addClass('hidden');
    }


    var createLightGallery = function() {
        var myArray = [{
                'src': 'assets/sample-images/sample-image@2x.jpg',
                'thumb': 'assets/sample-images/sample-image@2x.jpg'
            }, {
                'html': '#video2',
                'thumb': 'https://picsum.photos/300/400',
                'poster': 'https://picsum.photos/300/400'
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
            counter: false,
            autoplayFirstVideo: false,
            index: myIndex

        });

       
       console.log(myIndex);      
       //$('.zoom').data('lightGallery').slide(index);


    }


     var playVideo = function() {
         if ($('.lg-current').has('video')) {
            
            var videoElement = $('.lg-current').find('video').get(0);
            
            if (videoElement.paused) {
               videoElement.play();
               //changeButtons();
            } else if (videoElement.ended) { 
                videoElement.play();
            }
        } 

    }

    var pauseVideo = function() {
        $(this).addClass('hidden');
        if ($('.lg-current').has('video')) {
            
            var videoElement = $('.lg-current').find('video').get(0);
            
            if (!videoElement.paused) {
               videoElement.pause();
               //changeButtons();
            } else if (videoElement.ended) {  
                videoElement.play();
            }
        } 

    }

    var replayVideo = function() {
        if ($('.lg-current').has('video')) {
            
            var videoElement = $('.lg-current').find('video').get(0);
            videoElement.load();
            videoElement.play();
        } 

        
    }

    var changeButtons = function(event) {
        console.log('this is change buttons');
        if ($('#video-play').hasClass('hidden')) {
            $('#video-play').removeClass('hidden');
            $('#video-pause').addClass('hidden');
        }
      
    }
    
    var testing = function() {
        var myTarget = event.target;
        var myTargetClass = $(event.target).attr('class');
        var myTargetId = $(event.target).attr('id');
        console.log(myTarget);
        console.log(myTargetId);
        if (myTargetClass != 'lg-img-wrap' && myTargetId != 'video-replay') {
            if ( !checkForVideoButtons() ) {
                $('.lg-video-cont').append('<div class="video-buttons"><button id="video-pause"></button><button id="video-play" class="hidden"></button></button><button id="video-replay"></button></div>');
            }
        }

        if (myTargetId == 'video-replay') {
            replayVideo();
            if ( checkForVideoButtons() ) {
                removeVideoButtons();
                addPauseReplayBts();

            }
        }

        if (myTargetId == 'video-pause') {
            pauseVideo();
            $(event.target).attr('id', 'video-play');

        } 

        if (myTargetId == 'video-play') {
            playVideo();
            $(event.target).attr('id', 'video-pause');
        }
    }

    var removeVideoButtons = function() {
        $('.video-buttons').remove();
    }



    var checkForVideoButtons = function() {
        if ($('div').hasClass('video-buttons')) {
            return true;
        } else {
            return false;
        }
    }

    var addPauseReplayBts = function() {
         $('.lg-video-cont').append('<div class="video-buttons"><button id="video-pause"></button><button id="video-replay"></button></div>');
    }

    //there's a Harry Potter refernece here somewhere
    var openTheClose = function() {
        $('#close').removeClass('hidden').addClass('animated fadeIn');
    }
    
    


    var bindEvents = function() {
       $(document).ready(openPanel);
       $(document).ready(featureImg);
       $(document).on('click tap', '#close', closePanel);
       $(document).on('click tap', '.give', openGive);
       $(document).on('click tap', '.zoom', createLightGallery);
       $(document).on('onSlideClick.lg', testing);
       $(document).on('onBeforeSlide.lg', removeVideoButtons);
   }


  	return {
        init: init,
        closePanel: closePanel
    }

})();
