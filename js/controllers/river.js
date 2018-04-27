River = (function() {

    
    var width = 6500,
        height = 1000,
        river,
        tweenRiverMain,
        timing,
        results,
        bezPoints,
        myDraggable,
        mytl,
        screenLedInterval;


    var getSeconds = function(datatoload) {
        var numBubbles = datatoload.length;
        var riverTiming = (numBubbles / 3) * 2;
        console.log(numBubbles);
        console.log(riverTiming);
        return riverTiming;
    } 


    var initDraggable = function() {
        myDraggable = Draggable.create("#river", {
            type:"x",
            edgeResistance:0.25,
            zIndexBoost:false,
            bounds: {minX:getNegWidth(), maxX:getWidth()}, //{width:getRiverWidth()}
            throwProps:true,
            onDragStart:  function(){
               Utilities.resetTimeout();
            }
        });

    }


    var mySplitText = new SplitText("#text-to-split", {type:"chars,words"}),
    tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay:0});
    tl.from('#mysearch', 2.5, {opacity: 0.3, ease: Power4.easeInOut});
    tl.staggerFrom(mySplitText.chars, 2.5, {opacity: 0.3,  ease: Power4.easeInOut}, 0.25, 0.25);

    var mySplitTextReset = new SplitText("#text-to-split-reset", {type:"chars,words"}),
    tlR = new TimelineMax({repeat: -1, yoyo: true, repeatDelay:0});
    tlR.from('#myreset', 2.5, {opacity: 0.3, ease: Power4.easeInOut});
    tlR.staggerFrom(mySplitTextReset.chars, 2.5, {opacity: 0.3,  ease: Power4.easeInOut}, 0.25, 0.25);
   
   //TweenMax.from('#mysearch', 2.5, {opacity: 0.7, ease: Power4.easeInOut, repeat: -1, yoyo: true});

    // var river = document.getElementById('river');
    // var tweenRiverMain = new TweenMax.to("#river", riverSeconds, {x: "5000px", ease: Power0.easeNone, repeat: -1});
    

    //dead variables 
    // var nodes;
    // var format = d3.format(" ,d");

    
    
	var init = function() {
        bindEvents();
        river = document.getElementById('river');
        velocity = .005;
        timing = getWidth(data.donors) * velocity;
       
        tweenRiverMain = new TweenMax.to("#river", 0,{x: getRiverWidth(), ease: Power1.easeInOut, yoyo: true, repeat: -1});
        initDraggable();
        // Draggable.create("#river", {
        //     type:"x",
        //     edgeResistance:0.25,
        //     zIndexBoost:false,
        //     bounds:{width:getRiverWidth()},
        //     //lockAxis:true,
        //     throwProps:true
        // });
     
    }


   

    var getWidth = function() {
        var numBubbles = $('.circle-wrapper').length;
        var riverWidth = numBubbles * 75;
        var windowWidth = $(window).width();
        if (riverWidth == windowWidth) {
            return windowWidth;
        } else {
            console.log(riverWidth);
            return riverWidth;
        }
        
    }

    var getNegWidth = function() {
        console.log('getNegWidth is running');
        var myWidth = $('.circle-wrapper').length;
        var riverWidth = myWidth * 75;
        var windowWidth = $( window ).width();
        if (myWidth < windowWidth) {
            return -windowWidth;
        } else {
            return -(getWidth());
        }
    }

    var getMyWidth = function(datatoload) {
        var numBubbles = datatoload.length;
        var riverWidth = numBubbles * 75;
        return -riverWidth;
    }

    var getRiverWidth = function() {
        var numBubbles = $('.circle-wrapper').length;
        var riverWidth = numBubbles * 60;
        return riverWidth; 
    }


    var loadData = function(datatoload) {
        setTimeout(function() {
            //var numBubbles = $('.circle-wrapper').length;
            //var riverWidth = numBubbles * 80;
            $('#river').css('width', getRiverWidth());
        }, 0);

        $("#river").html($.templates("#river-template").render(datatoload)); // data.donors[id]
    }

    


    


    var getResults = function(event) {
        event.preventDefault();
        $('#submit').addClass('active-search');
        
        setTimeout(function() {

    
        var name = '';
        var year = '';
        var yearMax = '';
        var college = '';
        var donorName = $('#donor-name').val();
        var donorYear = $('#donor-year').val();
        var donorYearMax = $('#donor-year-max').val();
        var donorCollege = $("#donor-colleges").find("option:selected").val(); 
        console.log("donor name: " + donorName + " donor year: " + donorYear + " donor year max: " + donorYearMax + " donor college: " + donorCollege);

        if (donorName.length) {
            name = '[contains(legacy_name, "' +  donorName + '") or contains(last_name, "' +  donorName + '") or contains(first_name, "' +  donorName + '")] ';
        } 

        if (donorYear) {
            year = '[education_0_graduation_year >= ' + donorYear + ']';
        } 

        if (donorYearMax) {
            yearMax = '[education_0_graduation_year <= ' + donorYearMax + ']';
        }

        if (donorCollege != "All Colleges") {
            if (donorCollege == "Jefferson Medical College" || donorCollege == "Sidney Kimmel Medical College") {
                college = '[contains(education_0_college, "Medical")]';
            } else {
                college = '[contains(education_0_college, "' + donorCollege + '")]'; 
            } 
        }

        if (!donorName && !donorYear && !donorYearMax && donorCollege == "All Colleges") {
            results = JSON.search(data, "//donors");
        } else {
            results = JSON.search(data,  '//*' + name + year + yearMax + college); 
        }



        //results = JSON.search(data,  '//*' + name + year + yearMax + college);
        console.log("LOOK AT ME ", results);
        console.log(donorCollege);
        
       
        updateRiver(results);
        }, 1250);

       

    }

    




    
    var updateRiver = function(results) {
        if (results.length == 0) {
            $('#search-er').removeClass('hidden fadeOut').addClass('flex-container');
        } else {

            //d3.selectAll("svg").remove();
            $('#search-er').addClass('hidden fadeOut').removeClass('flex-container');
            $('.reset-search-wrapper').removeClass('hidden fadeOut').addClass('animated fadeIn flex-container');
            $('#river').html('');
            setTimeout(function() {
                Leds.resetLeds(); 
                loadData(results);
                var updatedLedsToDisplay = getUpdatedLedsToDisplay(results);
                Leds.checkLedArray(updatedLedsToDisplay);
                tweenRiverMain.kill();
                //velocity = 300;
                //timing = getWidth(results) / velocity;
                tweenRiverMain = new TweenMax.to("#river", 0, {x: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1});
                Search.closeSearch();

            }, 500);
            //setTimeout(function() { Data.init(results); }, 750);
        }
        //playRiver();
    }

    //change name to getSearchResultsLeds
    var getUpdatedLedsToDisplay = function(results) {
        var donorLeds = [];
        for (var i = 0; i<results.length; i++) {
            if (results[i].ledstodisplay.length > 0) {
                var donorLedArray = results[i].ledstodisplay;
                for (var j = 0; j<donorLedArray.length; j++) {
                   donorLeds.push(donorLedArray[j]);
                }
               
            } 
        }
        console.log('ledstodisplay: ' + donorLeds);
        return donorLeds;
    }

    var addLedsToArray = function(obj) {
        if (obj.ledstodisplay.length > 0) {
            var donorLedArray = obj.ledstodisplay;
            for (var j = 0; j<donorLedArray.length; j++) {
                donorLeds.push(donorLedArray[j]);
            }
        }
    }

   
    var prepareForSwipes = function(event) {
        console.log("prepareForSwipes");

        var swipeOptions = { dragLockToAxis: true, dragBlockHorizonal: true};

        function dragEl(event) {
            var elToDrag = event.target;
            eltoDrag.style.left = event.deltaX + "px";
        }

        function swipeRightEl(event) {
            // var elToSwipe = event.target;
            // console.log(event);
            var eDelta = event.deltaX;
            var eVelocity = event.overallVelocity;
            var distance = eDelta * eVelocity;
            console.log(event.deltaX);
            $('#river').animate({left: "+=" + distance}, "swing");

            $('#instructions').html('');
        }

        function swipeLeftEl(event) {
            // var elToSwipe = event.target;
            // console.log(event);
            var eDelta = event.deltaX;
            var eVelocity = event.overallVelocity / 2;
            var distance = eDelta * eVelocity;
            console.log(event.deltaX);
            $('#river').animate({left: "-=" + distance}, "swing");
            $('#instructions').html('');
        
        }

        function releaseEl(event) {
            event.gesture.stopDetect();
        }

        function initTouchListeners(touchableEl) {
            var touchControl = new Hammer(touchableEl, swipeOptions);
            touchControl.on("dragright", dragEl)
                .on("swiperight", swipeRightEl)
                .on("swipeleft", swipeLeftEl)
                .on("release", releaseEl);
        };


        var river = document.getElementById('river');
        initTouchListeners(river);



    }
    

   


    var pauseRiver = function() {
        if (TweenMax.isTweening( '#river') ) {
            tweenRiverMain.pause();
        }

    }

    var playRiver = function() {
         if (!TweenMax.isTweening( '#river') ) {
            tweenRiverMain.play();
            screenLedInterval = setInterval(function() {
                Leds.resetLeds();
                Leds.checkLedArray(Leds.getLedsOnScreen(data.donors));
            }, 1000);
        } 
    }

    
    var circleTimeline = function() {
        var circle = document.getElementsByClassName('circle');
        console.log(circle.length);
        for (i=0; i<circle.length; i++) {
            console.log('this is a circle');
            console.log(circle[i]);
            var mytl = new TimelineMax({delay: i * 0.25, repeat: -1, yoyo: true});
            bezPoints = [{y:-50}, {y:100}, {y:-50}, {y:100}];
            mytl.from (circle[i], 22, {bezier: {values: bezPoints, autorotate: true}});
            mytl.timeScale(1.5);
        }
       
    }    





    var resetRiver = function() {
        //d3.selectAll("svg").remove(); //d3.selectAll("svg > *").remove();
        //Data.resetData(); //Data.resetData();
        setTimeout(function() { loadData(data.donors); }, 750);
        Leds.resetLeds(); 
        velocity = 100;
        timing = getWidth(data.donors) / velocity;
        //bezPoints = [{x:-1920, y:0}, {x: 0, y:600}, {x:1200, y:00}, {x:1920, y:600}];
        //Attempt1
        //tweenRiverTry = new TweenMax.to(".donor", 22, {bezier:{values: bezPoints, autorotate: true}, x: getMyWidth(data.donors), ease: Power1.easeInOut, yoyo: true, repeat: -1});
        
        //Attempt2
        //rivertl = new TimelineMax({x: getMyWidth(data.donors), repeat: -1, yoyo: true, ease: Power1.easeInOut});
        //rivertl.to("#river",5,{bezier:{autoRotate:true,curviness:2,values:bezPoints}},"");

        setTimeout(function() { circleTimeline(); }, 1500);

        screenLedInterval = setInterval(function() {
                Leds.resetLeds();
                Leds.checkLedArray(Leds.getLedsOnScreen(data.donors));
        }, 1000);


        tweenRiverMain = new TweenMax.to("#river", 32, {x: getMyWidth(data.donors), ease: Power1.easeInOut, yoyo: true, repeat: -1});
        tweenRiverMain.resume();
        $('.reset-search-wrapper').addClass('animated fadeOut hidden').removeClass('flex-container');
        $('#submit').removeClass('active-search');
        $('#all-donors-btn').removeClass('active-all-donors');

        
    }

    var testingDrag = function() {
        console.log('testingDrag');
    }



    var bindEvents = function() {
        //$(document).ready(resetRiver);
        //$(document).ready(loadData(data.donors));
        //$(document).ready(prepareForSwipes);
        $(document).on('click tap', '#river', pauseRiver);
    }


  	return {
        init: init,
        getResults: getResults,
        updateRiver: updateRiver,
        resetRiver: resetRiver,
        playRiver: playRiver,
        tweenRiverMain: tweenRiverMain,
        addLedsToArray: addLedsToArray,
        results: results

    }

})();
