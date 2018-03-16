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
        $('#relationships').slick({
            dots: false,
            arrows: false,
            centerMode: true,
            slidesToShow: 2
        })
    }


    var getRels = function(id) {
        var getRelsArray = data.donors[id].rels;
        var newRelsArray = [];
        if (getRelsArray.length != 0) {
            for (i = 0; i < getRelsArray.length; i++) {
                var index = data.donors.findIndex(function(j) {
                    return j.ID == getRelsArray[i];
                })
                newRelsArray.push(index);
            }
        }

        for (i = 0; i < newRelsArray.length; i++) {
            var relId = newRelsArray[i];
            if (data.donors[id].giving_level == 10000) {
                $('#relationships').append(' <div class="circle rel donor large" data-donor="'+ relId + '"><p>' + data.donors[relId].first_name + ' ' + data.donors[relId].last_name + '</p><p>' + data.donors[relId].edu_0_grad_yr + '</p>');
            } else {
                $('#relationships').append(' <div class="circle rel donor"  data-donor="'+ relId + '"><p>' + data.donors[relId].first_name + ' ' + data.donors[relId].last_name + '</p><p>' + data.donors[relId].edu_0_grad_yr + '</p>');
            } 
        }


    }



    var enableGallery = function() {
        //console.log('enableGallerySlider');
        var active = $('.active').html();
        var id = $('#panel').attr('data-donor');
       
        if (active) {

            $('#gallery-lg').append(active + '<div class="zoom" data-donor=' + id + '><img src="assets/icons/icon-zoom.svg"></div>');

        } else {
            $( ".gallery-item" ).first().addClass('active');
            enableGallery();
        }

    }

    var featureImg = function() {
            console.log('featureImg is working');
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

        var $this = $(this);
        $('#gallery-lg').html('');
        $('.gallery-item').removeClass('active');
        $this.addClass('active');
        enableGallery();  
    }

    

    var getFeatImgURL = function(id) {
        var FeatureImgUrl;
        if (data[id].primary_img){
                var primaryImgID = data[id].primary_img;
                console.log(data[id].primary_img);
                $.getJSON("http://dev.interactivemechanics.com/tju-donor-wall-cms/index.php/wp-json/wp/v2/media/" + primaryImgID, function(d) {
                    if (d.source_url) {
                        // console.log(index, d.source_url, value.post_title);
                        FeatureImgUrl = d.source_url;
                        //console.log(d.source_url);
                        //$('.active').attr('data-src', d.source_url);
                        //$('.active>img').attr('src', d.source_url);
                    }
                });
        }
        return FeatureImgUrl;
        
    }


    

    var openPanel = function() {
        var id = $(this).attr('data-donor');
        River.tweenRiverMain.pause();
        $('#panel').html('');
        $("#panel").html($.templates("#panel-template").render(data.donors[id]));
        $('#panel').removeClass('hidden fadeOutLeft').addClass('animated slideInLeft flex-container').attr('data-donor', id);
        $('.all-donors-wrapper').removeClass('hidden').addClass('animated fadeIn flex-container');
        getRels(id);
        enableRelSlider();

        //console.log(getFeatImgURL(id));
        setTimeout(function() { enableGallery(id); }, 1000);
        if (data.donors[id].giving_level == 10000) {
            $('#gallery-wrapper').removeClass('hidden');
            $('#close').css('width', 'calc(100vw - 1300px');
        }  else {
            $('#gallery-wrapper').addClass('hidden');
            $('#close').css('width', 'calc(100vw - 650px');
        }

        // $('.donor').each( function() {
        //     var $this = $(this);
        //     var h = new Hammer(this);
        //     h.on("tap press", function() {
              
        //         $('#panel').removeClass('hidden fadeOutLeft').addClass('animated slideInLeft flex-container');
        //         $(this).addClass('active');
        //         $('main').addClass('close-panel');
        //         Search.closeSearch();
        //         setTimeout(function() { openTheClose(); }, 750);

        //     });
        // });

        Search.closeSearch();
        setTimeout(function() { openTheClose(); }, 750);


    }


    var openGive = function() {
        var id = $(this).attr('data-donor');
        $('#right-panel').removeClass('hidden fadeOutRight').addClass('animated slideInRight flex-container'); 
        $('#search').addClass('hidden'); 
        $('#give-panel').removeClass('hidden');
        $("#give-panel").html($.templates("#give-template").render(data.donors[id]));
        $('#search-btn').addClass('animated fadeOut');

        setTimeout(function(){ $('#search-close').addClass('animated fadeIn').removeClass('fadeOut').css('display', 'flex'); }, 750);
        $('main').addClass('close-panel');

    }


    
    var closePanel = function() {
        River.tweenRiverMain.resume();
        $('#panel').removeClass('slideInLeft').addClass('fadeOutLeft');
        $('#close').removeClass('fadeIn').addClass('hidden');
        $('.all-donors-wrapper').removeClass('fadeIn flex-container').addClass('hidden');
        $('#gallery-wrapper').addClass('hidden');

    }


    var createLightGallery = function() {
        var id = $(this).attr('data-donor');
       
        var lgArray = [];
        var imgArray = data.donors[id].galleryArray;
        var primaryImgLg = data.donors[id].primary_img;

        if (primaryImgLg.length != 0) {
            var primaryImgOb = {};
            primaryImgOb.src = primaryImgLg;
            primaryImgOb.thumb = primaryImgLg;
            lgArray.push(primaryImgOb);
        }



        for (i = 0; i < imgArray.length; i ++) {
            var fileName = data.donors[id].galleryArray[i];
            var fileExtension = fileName.split('.').pop();
            if (fileExtension == 'jpg' || fileExtension == 'png') {
                var lgImg = {};
                lgImg.src = fileName;
                lgImg.thumb = fileName;
                lgArray.push(lgImg);
            } else {
                var lgVid = {};
                lgVid.html = '#video2';
                lgVid.thumb = fileName;
                lgVid.post = fileName;
                lgArray.push(lgVid);
            }

        }
        
        console.log(lgArray);


        var activeItem = $('.active').attr('data-src');
        //console.log(activeItem);
        var findMyIndex = function() {
            if (lgArray.length > 1) {
                return lgArray.map(function(e) { return e.src; }).indexOf(activeItem);
            } else {
                return 0;
            }
        }



        var myIndex = findMyIndex();

        $('.zoom').lightGallery({
            dynamic: true,
            dynamicEl: lgArray,
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
        //console.log('this is change buttons');
        if ($('#video-play').hasClass('hidden')) {
            $('#video-play').removeClass('hidden');
            $('#video-pause').addClass('hidden');
        }
      
    }
    
    var testing = function() {
        var myTarget = event.target;
        var myTargetClass = $(event.target).attr('class');
        var myTargetId = $(event.target).attr('id');
        //console.log(myTarget);
        //console.log(myTargetId);
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
      // $(document).ready(openPanel);
       //$(document).ready(featureImg);
       $(document).on('click tap', '#close', closePanel);
       $(document).on('click tap', '.give[data-donor]', openGive);
       $(document).on('click tap', '.zoom[data-donor]', createLightGallery);
       $(document).on('onSlideClick.lg', testing);
       $(document).on('onBeforeSlide.lg', removeVideoButtons);
       $(document).on('click tap', '.donor[data-donor]', openPanel);
       $(document).on('click tap', '.gallery-item', featureImg);
       $(document).on('click tap', '#all-donors-btn', closePanel);
       $(document).on('click tap', '.slick-slide[data-donor]', openPanel);
   }


  	return {
        init: init,
        closePanel: closePanel
    }

})();
