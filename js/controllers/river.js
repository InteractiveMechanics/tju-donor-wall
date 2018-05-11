River = (function() {

    
    var width,
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
                bounds: {minX:-6000, maxX:0}, // {minX:getNegWidth(), maxX:getWidth()}
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
   

    
    
	var init = function() {
        bindEvents();
        river = document.getElementById('river');
        velocity = .005;
        timing = getWidth(data.donors) * velocity;
       
        tweenRiverMain = new TweenMax.to("#river", 0,{x: getRiverWidth(), ease: Power1.easeInOut, yoyo: true, repeat: -1});
        initDraggable();
       
     
    }


   

    var getWidth = function() {
        var numBubbles = $('.circle-wrapper').length;
        var riverWidth = numBubbles * 75;
        var windowWidth = $(window).width();
        if (riverWidth == windowWidth) {
            return windowWidth;
        } else {
            //console.log(riverWidth);
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

        console.log("LOOK AT ME ", results);
      
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

   



    var playRiver = function() {
         if (!TweenMax.isTweening( '#river') ) {
            tweenRiverMain.play();
            screenLedInterval = setInterval(function() {
                Leds.resetLeds();
                Leds.checkLedArray(Leds.getLedsOnScreen(data.donors));
            }, 1000);
            mytl.play();
        } 
    }


    var randomIntFromInterval = function(min,max) {
    
        return Math.random()*(max-min)+min;
    
    }

    
    var circleTimeline = function() {
        var circle = document.getElementsByClassName('circle');
        for (i=0; i<circle.length; i++) {
            
            var animationDelay = randomIntFromInterval(0.18, 0.25);
            
            var bezXPoint1 = randomIntFromInterval(10, 20);
            var bezXPoint2 = randomIntFromInterval(10, 20);
            var bezXPoint3 = randomIntFromInterval(10, 20);
            var bezXPoint4 = randomIntFromInterval(10, 20);
            var bezYPoint1 = randomIntFromInterval(15, 25);
            var bezYPoint2 = randomIntFromInterval(15, 25);
            var bezYPoint3 = randomIntFromInterval(15, 25);
            var bezYPoint4 = randomIntFromInterval(15, 25);

            mytl = new TimelineMax({delay: i * animationDelay, repeat: -1, yoyo: true});
            
            bezPoints = [{x: 0, y: 0}, {x: bezXPoint1, y: bezYPoint1},  {x: bezXPoint2, y: -bezYPoint2}, {x: -bezXPoint3, y: -bezYPoint3}, {x: -bezXPoint4, y: bezYPoint4}, {x: 0, y: 0}];
            mytl.from (circle[i], 15, {bezier: {values: bezPoints}});
        }
       
    }

    var pauseAllTweens = function(event) {
        TweenMax.pauseAll();
        
    }  


     var pauseRiver = function() {
        alert('pauseRiver');
        // if (TweenMax.isTweening( '#river') ) {
        //     tweenRiverMain.pause();
        // }
    }  







    var resetRiver = function() {
        setTimeout(function() { loadData(data.donors); }, 750);
        Leds.resetLeds(); 
        velocity = 100;
        delayedWidth = getWidth(data.donors);
        timing = getWidth(data.donors) / velocity;

        

        setTimeout(function() { circleTimeline(); }, 1500);


        screenLedInterval = setInterval(function() {
                Leds.resetLeds();
                Leds.checkLedArray(Leds.getLedsOnScreen(data.donors));
        }, 1000);

        tweenRiverMain = new TweenMax.to("#river", 120, {x: getMyWidth(data.donors), ease: Sine.easeInOut, yoyo: true, repeat: -1});
        tweenRiverMain.resume();
        $('.reset-search-wrapper').addClass('animated fadeOut hidden').removeClass('flex-container');
        $('#submit').removeClass('active-search');
        $('#all-donors-btn').removeClass('active-all-donors');

        
    }

    var testingDrag = function() {
        console.log('testingDrag');
    }



    var bindEvents = function() {
        $(document).on('click tap', '#river', pauseAllTweens);
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
