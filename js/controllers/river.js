River = (function() {

    
    var width,
        height = 1000,
        river,
        tweenRiverMain,
        timing,
        results,
        bezPoints,
        myDraggable,
        mytl;

    
    var initDraggable = function() {
            myDraggable = Draggable.create("#river", {
                type:"x",
                edgeResistance:0.25,
				dragResistance:0.25,
                zIndexBoost:false,
                bounds: {minX: -getRiverWidth(), maxX:0}, // {minX:getNegWidth(), maxX:getWidth()}
                throwProps:true,
				maxDuration: 1,
				throwResistance: 2000,
                onDragStart:  function(){
                   Utilities.resetTimeout();
                }
            });
    
    
    }


    //animation for Search Benefactors button
    var mySplitText = new SplitText("#text-to-split", {type:"chars,words"}),
    tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay:0});
    tl.from('#mysearch', 2.5, {opacity: 0.3, ease: Power4.easeInOut});
    tl.staggerFrom(mySplitText.chars, 2.5, {opacity: 0.3,  ease: Power4.easeInOut}, 0.25, 0.25);

    //animation for Show All Benefactors button
    var mySplitTextReset = new SplitText("#text-to-split-reset", {type:"chars,words"}),
    tlR = new TimelineMax({repeat: -1, yoyo: true, repeatDelay:0});
    tlR.from('#myreset', 2.5, {opacity: 0.3, ease: Power4.easeInOut});
    tlR.staggerFrom(mySplitTextReset.chars, 2.5, {opacity: 0.3,  ease: Power4.easeInOut}, 0.25, 0.25);
   

    
    
	var init = function() {
        bindEvents();
        //tweenRiverMain = new TweenMax.to("#river", 0,{x: getRiverWidth(), ease: Power1.easeInOut, yoyo: true, repeat: -1});
        //setTimeout(function() { initDraggable(); }, 1250);
    }


    var resetTextSplitEls = function() {
        //resets Search Benefactors button
        $('#mysearch').css('opacity', 1);
        $('#text-to-split div').css('opacity', 1);

        //resets Show All Benefactors button
        $('#myreset').css('opacity', 1);
        $('#text-to-split-reset div').css('opacity', 1);
    }
   

   

    var getMyWidth = function(datatoload) {
        var numBubbles = datatoload.length;
        var riverWidth = numBubbles * 67;
        return -riverWidth;
    }

    var getRiverWidth = function() {
        var numBubbles = $('.circle-wrapper').length;
        var riverWidth = numBubbles * 67;
        return riverWidth; 
    }


    var loadData = function(datatoload) {
        setTimeout(function() {
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
        //console.log("donor name: " + donorName + " donor year: " + donorYear + " donor year max: " + donorYearMax + " donor college: " + donorCollege);

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

        //console.log("LOOK AT ME ", results);
      
        updateRiver(results);
        }, 1250);

       

    }

    


    /* gets the search results; if there are no results, shows search error button
    *  when there are results, it removes the search error button, clears the river, laods the data
    *  kills the current River tween and creates a new one that doesn't move and resets the bounds of the Draggable based on the new width
    *  and closes the search panel
    *  takes the search results as a parameter
    *  called in River.getResults
    */ 
    var updateRiver = function(results) {
        if (results.length == 0) {
            //if there are no results, show search error button
            $('#search-er').removeClass('hidden fadeOut').addClass('flex-container');
        } else {

            //d3.selectAll("svg").remove();
            $('#search-er').addClass('hidden fadeOut').removeClass('flex-container');
            $('.reset-search-wrapper').removeClass('hidden fadeOut').addClass('animated fadeIn flex-container');
            $('#river').html('');
            setTimeout(function() {
                Leds.isPaused = false;

                Leds.resetLeds(); 
                loadData(results);
                var updatedLedsToDisplay = getUpdatedLedsToDisplay(results);
                Leds.checkLedArray(updatedLedsToDisplay);
                //console.log(updatedLedsToDisplay);

                tweenRiverMain.kill();
                tweenRiverMain = new TweenMax.to("#river", 0, {x: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1});
                myDraggable[0].applyBounds({minX: -getRiverWidth(), maxX:0});
                Search.closeSearch();

            }, 500);
            
        }
       
    }

    //change name to getSearchResultsLeds
    /* takes search results as an argument, returns an array of integers that are Leds to display
    * gets called in updateRiver
    */
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
        //console.log('ledstodisplay: ' + donorLeds);
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
        resetTextSplitEls();

         //animation for Search Benefactors button
        var mySplitText = new SplitText("#text-to-split", {type:"chars,words"}),
        tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay:0});
        tl.from('#mysearch', 2.5, {opacity: 0.3, ease: Power4.easeInOut});
        tl.staggerFrom(mySplitText.chars, 2.5, {opacity: 0.3,  ease: Power4.easeInOut}, 0.25, 0.25);

        //animation for Show All Benefactors button
        var mySplitTextReset = new SplitText("#text-to-split-reset", {type:"chars,words"}),
        tlR = new TimelineMax({repeat: -1, yoyo: true, repeatDelay:0});
        tlR.from('#myreset', 2.5, {opacity: 0.3, ease: Power4.easeInOut});
        tlR.staggerFrom(mySplitTextReset.chars, 2.5, {opacity: 0.3,  ease: Power4.easeInOut}, 0.25, 0.25);
    }  


    var screenLedInterval = function() {
        if (!Leds.isPaused) {
            Leds.resetLeds();  //<-- so is it resetting the LEDs every second?? 
            Leds.checkLedArray(Leds.getLedsOnScreen(data.donors));
        }
    }




    /* 
    * brings the river back to its starting state, 
    * shows all donors, initializes all tweens (River, Circles, Draggable), shows only Search Benefactors button
    * when it is called: Utilities.resetInteractive; on click tap of #reset-search-btn (Show All Benefactors)
    */
    var resetRiver = function() {
        Leds.isPaused = false;

        setTimeout(function() { loadData(data.donors); }, 750);
        
        setInterval(screenLedInterval, 1000);
        
        setTimeout(function() { 
            circleTimeline();
            initDraggable(); 
        }, 1500);
      
       
        setTimeout(function() {
            tweenRiverMain = new TweenMax.to("#river", 210, {x: getMyWidth(data.donors), ease: Power0.easeNone, yoyo: true, repeat: -1});
            //tweenRiverMain.resume();
        }, 1750);
        

        $('.reset-search-wrapper').addClass('animated fadeOut hidden').removeClass('flex-container');
        $('#submit').removeClass('active-search');
        $('#all-donors-btn').removeClass('active-all-donors');

        
    }


    var bindEvents = function() {
        $(document).on('click tap', '#river', pauseAllTweens);
    }


  	return {
        init: init,
        getResults: getResults,
        updateRiver: updateRiver,
        resetRiver: resetRiver,
        tweenRiverMain: tweenRiverMain,
        addLedsToArray: addLedsToArray,
        results: results,
        resetTextSplitEls: resetTextSplitEls

    }

})();
