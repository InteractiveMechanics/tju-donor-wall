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

        $('#relationships').flickity({
          // options
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          prevNextButtons: false
        });
    }



    var getRels = function(id) {
        var panelData = JSON.search(data, '//*[ID=' + id + ']');
        

        var getRelsArray = panelData[0].rels;
        //console.log(getRelsArray);
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
            var originalId = getRelsArray[i];
            if (data.donors[relId].giving_level == 10000 && data.donors[relId].primary_img) {
                $('#relationships').append(' <div class="circle rel donor large" data-donor="'+ relId + '" data-id="'+ originalId + '" style="width: 155px; background-image: linear-gradient(rgba(46, 57, 86, 0.58) 0%,rgba(61, 73, 107, 0.51) 49.2%,rgba(76, 90, 129, 0.7) 100%), url('+ data.donors[relId].primary_img + ');"><p>' + data.donors[relId].first_name + ' ' + data.donors[relId].last_name + '</p><p>' + data.donors[relId].education_0_graduation_year + '</p>');
            } else if (data.donors[relId].givinglevel == 10000)  {
                 $('#relationships').append(' <div class="circle rel donor large" data-donor="'+ relId + '" data-id="'+ originalId + '" style="width: 155px;"><p>' + data.donors[relId].first_name + ' ' + data.donors[relId].last_name + '</p><p>' + data.donors[relId].education_0_graduation_year + '</p>');
            } else {
                $('#relationships').append(' <div class="circle rel donor"  data-donor="'+ relId + '" data-id="'+ originalId + '" style="width: 155px;"><p>' + data.donors[relId].first_name + ' ' + data.donors[relId].last_name + '</p><p>' + data.donors[relId].education_0_graduation_year + '</p>');
            }
        }


    }



    var enableGallery = function() {
        var active = $('.active').html();
        var id = $('#panel').attr('data-id');
        var panelData = JSON.search(data, '//*[ID=' + id + ']');

       
        if (active) {
            $('#gallery-lg').html('');
            $('#gallery-lg').append(active + '<div class="zoom" data-id=' + id + '><img src="assets/icons/icon-zoom.svg"><h3>View Larger</h3></div>');
            

        } else {
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

            var $this = $(this);
            $('#gallery-lg').html('');
            $('.gallery-item').removeClass('active');
            $this.addClass('active');
            enableGallery(); 

    
    }

    

    var getFeatImgURL = function(id) {
        var panelData = JSON.search(data, '//*[ID=' + id + ']');
        
        var FeatureImgUrl;

        if (panelData[0].primary_img.length != 0){
                var primaryImgID = data[id].primary_img;
                //console.log(data[id].primary_img);
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

    

    var openPanel = function(id) {
        
        //console.log(id);
        Leds.isPaused = true;

        var panelData = JSON.search(data, '//*[ID=' + id + ']');
        //console.log(panelData);
        if (panelData[0].ledstodisplay) {
            donorLeds = panelData[0].ledstodisplay;
            Leds.resetLeds();
            //Leds.writeFrame(donorLeds);
            Leds.checkLedArray(donorLeds);

        }

        TweenMax.pauseAll();
     
        $('#panel').html('');
        $("#panel").html($.templates("#panel-template").render(panelData)); // data.donors[id]
        $('#panel').removeClass('hidden fadeOutLeft').addClass('animated slideInLeft flex-container').attr('data-id', id);
        $('.all-donors-wrapper').removeClass('hidden').addClass('animated fadeIn flex-container');
        getRels(id);
        enableRelSlider();
        //$("#relationships").slick("refresh");


        //console.log(getFeatImgURL(id));
        setTimeout(function() { enableGallery(id); }, 1000);
        if (panelData[0].giving_level == 10000 && panelData[0].primary_img.length != 0) {
            $('#gallery-wrapper').removeClass('hidden');
            $('#close').css('width', 'calc(100vw - 1300px');
        }  else {
            $('#gallery-wrapper').addClass('hidden');
            $('#close').css('width', 'calc(100vw - 650px');
        }


        Search.closeSearch();
        setTimeout(function() { openTheClose(); }, 750);


    }


    var openGive = function() {
        id = $(this).attr('data-id');
        var idType = typeof(id);
        if (idType != "string") {
            var panelData = JSON.search(data, '//*[ID=' + id + ']');
            $("#give-panel").html($.templates("#give-template").render(panelData));
        } else {
            $("#give-panel").html($.templates("#give-template").render(data.donors[10]))
        }
     
        $('#right-panel').removeClass('hidden fadeOutRight').addClass('animated slideInRight flex-container'); 
        $('#search').addClass('hidden'); 
        $('#give-panel').removeClass('hidden');
        $('#search-btn').addClass('animated fadeOut');

        setTimeout(function(){ $('#search-close').addClass('animated fadeIn').removeClass('fadeOut').css('display', 'flex'); }, 750);
        $('main').addClass('close-panel');

    }


    
    var closePanel = function() {
        //River.tweenRiverMain.resume();
            Leds.isPaused = false;

            $('.donor').removeClass('animated pulse active-bubble');
            $('#panel').removeClass('slideInLeft').addClass('fadeOutLeft');
            $('#close').removeClass('fadeIn').addClass('hidden');
            $('.all-donors-wrapper').removeClass('fadeIn flex-container').addClass('hidden');
            $('#gallery-wrapper').addClass('hidden');
            //Leds.writeFrame([]);
            
        
    }

    var resetPanel = function() {
        $('#reset').removeClass('active-reset');
        $('#all-donors-btn').addClass('animated pulse active-all-donors');

        setTimeout(function() {
            Leds.isPaused = false;

            $('.donor').removeClass('animated pulse active-bubble');
            $('#panel').removeClass('slideInLeft').addClass('fadeOutLeft');
            $('#close').removeClass('fadeIn').addClass('hidden');
            $('.all-donors-wrapper').removeClass('fadeIn flex-container').addClass('hidden');
            $('#gallery-wrapper').addClass('hidden');
            
            
        }, 1250); 
    }


    var createLightGallery = function(id) {
        //var id = $(this).attr('data-id');
        $('.zoom').removeClass('zoom-active animated tada');
        var panelData = JSON.search(data, '//*[ID=' + id + ']');
       
        var lgArray = [];
        var imgArray = panelData[0].galleryArray;
        var primaryImgLg = panelData[0].primary_img;
        var myVideoLg = panelData[0].video;
        //console.log(myVideoLg);
        var videoPoster = panelData[0].video_poster;
        var myVideoOb = {};

        if (primaryImgLg.length != 0) {
            var primaryImgOb = {};
            primaryImgOb.src = primaryImgLg;
            primaryImgOb.thumb = primaryImgLg;
            lgArray.push(primaryImgOb);
        }

        
        for (i = 0; i < imgArray.length; i ++) {
            var fileName = panelData[0].galleryArray[i];
            var fileExtension = fileName.split('.').pop();
            if (fileExtension == 'jpg' || fileExtension == 'png') {
                var lgImg = {};
                lgImg.src = fileName;
                lgImg.thumb = fileName;
                lgImg.type = "image";
                lgArray.push(lgImg);
            } 

        }

         if (myVideoLg) {
            
            myVideoOb.html = '<video class="lg-video-object lg-html5" preload="none"><source src="' + myVideoLg  + '" type="video/mp4">Your browser does not support HTML5 video</video>';
            myVideoOb.poster = videoPoster;
            myVideoOb.thumb = videoPoster;
            lgArray.push(myVideoOb);
        }
        
        //console.log(lgArray);


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
            hideBarsDelay: 90000,
            autoplayFirstVideo: false,
            index: myIndex

        });

       
       //console.log(myIndex);      
       
    }

    var animateZoom = function() {
        var id = $(this).attr('data-id');
        $('.zoom').addClass('zoom-active ');
        setTimeout(function() { createLightGallery(id) }, 1250);
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
    
    var toggleVideoBtns = function() {
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
        //console.log('removeVideoButtons');
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

    var animateBubble = function() {
        $(this).addClass('animated pulse active-bubble');
        $('#all-donors-btn').removeClass('animated pulse active-all-donors');
        var id = $(this).attr('data-id');
        setTimeout(function() {  openPanel(id); }, 1000);
    }
    
    


    var bindEvents = function() {
       $(document).on('click tap', '#close', closePanel);
       $(document).on('click tap', '.give', openGive);
       $(document).on('click tap', '.zoom[data-id]', animateZoom);
       $(document).on('onSlideClick.lg', toggleVideoBtns);
       $(document).on('onBeforeSlide.lg', removeVideoButtons);
       $(document).on('click tap', '.donor[data-id]', animateBubble);
       $(document).on('click tap', '.gallery-item', featureImg);
       $(document).on('click tap', '#all-donors-btn', resetPanel);
       $(document).on('click tap', '.slick-slide[data-id]', openPanel);
       $(document).on('swipe', '#relationships', Utilities.resetTimeout);
   }


  	return {
        init: init,
        closePanel: closePanel
    }

})();
