River = (function() {

    
    var width = 6500,
        height = 1000,
        river,
        tweenRiverMain,
        timing,
        results,
        myDraggable;


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
            bounds:{width:getRiverWidth()},
            //lockAxis:true,
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
        tweenRiverMain = new TweenMax.to("#river", 0, {x: getRiverWidth(), ease: Power1.easeInOut, yoyo: true, repeat: -1});
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


   

    var getWidth = function(datatoload) {
        var numBubbles = datatoload.length;
        var riverWidth = numBubbles * 150;
        var windowWidth = $(window).width();
        if (riverWidth < windowWidth) {
            return windowWidth;
        } else {
            return riverWidth
        }
        
    }

    var getNegWidth = function(datatoload) {
        var myWidth = getWidth(datatoload);
        var windowWidth = $( window ).width();
        if (myWidth < windowWidth) {
            return -windowWidth;
        } else {
            return -(getWidth(datatoload));
        }
    }

    var getMyWidth = function(datatoload) {
        var numBubbles = datatoload.length;
        var riverWidth = numBubbles * 75;
        return -riverWidth;
    }

    var getRiverWidth = function() {
        var numBubbles = $('.circle-wrapper').length;
        var riverWidth = numBubbles * 100;
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

    
    //data/testing.json
    // var loadData = function(datatoload) {
    //         var svgContainer = d3.select("#river").append("svg")
    //         .attr("width", 3600)
    //         .attr("height", height)
    //         .attr("id", "riverpanel");

          
    //         var textNodes = svgContainer.selectAll("text")
    //             .data(datatoload);

    //         foreignObjects = textNodes.enter().append("foreignObject")
    //             .attr('data-donor', function(d, i) {
    //                return i;
    //             })
    //             .attr('data-id', function(d, i) {
    //                 return d.ID;
    //             })
    //             .classed("donor", function(d){
    //                 if (d.bubble_type == "donor") {
    //                     return true;
    //                 } 
    //             })
    //             .classed("give", function(d, i) {
    //                 if (d.bubble_type !== "donor") {
    //                     return true; 
    //                 } 
    //             })
    //             .classed("sm", function(d) {
    //                 if (d.giving_level == 9999) {
    //                     return true;
    //                 }
    //             }) 
    //             .classed("large", function(d) {
    //                 if (d.giving_level == 10000) {
    //                     return true;
    //                 }
    //             })
    //             .attr("width",function (d) {  
    //                 if (d.giving_level == 9999) {
    //                     return 170;
    //                 } else {
    //                     return 210;
    //                 }
    //             })
    //             .attr("height",function (d) {
    //                  if (d.giving_level == 9999) {
    //                     return 170;
    //                 } else {
    //                     return 210;
    //                 } 
    //             });

    //         htmlDOMs = foreignObjects.append("xhtml:div");

    //         htmlDivs = htmlDOMs.append("div")
    //             .classed("circle", true)
    //             .classed("large", function(d) {
    //                  if (d.giving_level == 10000) {
    //                     return true;
    //                 } 
    //             })
    //             .classed("sm", function(d) {
    //                 if (d.giving_level == 9999) {
    //                     return true;
    //                 } 
    //             })
    //             .classed("give", function(d) {
    //                 if (d.giving_level != 10000 && d.giving_level != 9999) {
    //                     return true;
    //                 }
    //             })
    //             .style("background-image", function(d) {
    //                 var returnHeadshot;
    //                 if (d.giving_level == 10000 && d.primary_img) {
    //                     returnHeadshot = 'url("'+ d.primary_img +'")';
    //                 } else if (d.giving_level == 10000 && !(d.primary_img)) {
    //                     returnHeadshot = 'linear-gradient(45deg, rgba(17,22,50,1) 0%,rgba(30,38,85,1) 50%,rgba(61,70,123,1) 100%)';
    //                 } else if (d.giving_level == 9999) {
    //                     returnHeadshot = 'linear-gradient(45deg, rgba(41,73,130,1) 0%,rgba(96,132,195,1) 50%,rgba(137,165,214,1) 100%)';
    //                 } else {
    //                     returnHeadshot = 'linear-gradient(45deg, rgba(72,20,30,1) 1%,rgba(160,41,68,1) 50%,rgba(189,80,104,1) 100%)';
    //                 }                    
    //                 return returnHeadshot;
    //             })
    //             .html(function(d, i) { 
    //                 var donorFirst;
    //                 var donorMiddle;
    //                 var donorLast;
    //                 var donorSuffix;
    //                 var donorHonor;
    //                 var donorGradYear;


    //                 if (d.first_name && d.first_name != 'undefined') {
    //                     donorFirst = d.first_name + ' ';
    //                 } else {
    //                     donorFirst = '';
    //                 }

    //                 if (d.middle) {
    //                     donorMiddle = d.middle + ' ';
    //                 } else {
    //                     donorMiddle = '';
    //                 }

    //                 if (d.last_name) {
    //                     donorLast = d.last_name + ' '; 
    //                 } else {
    //                     donorLast = '';
    //                 }

    //                 if (d.suffix) {
    //                     donorSuffix = d.suffix + ' ';
    //                 } else {
    //                     donorSuffix = '';
    //                 }

    //                 if (d.honorific) {
    //                     donorHonor = d.honorific + ' ';
    //                 } else {
    //                     donorHonor = '';
    //                 }

    //                 if (d.education_0_graduation_year) {
    //                     donorGradYear = '<p>' + d.education_0_graduation_year + '</p>';
    //                 } else {
    //                     donorGradYear = '';
    //                 }

    //                 if (i % 10 != 0 || i == 0) {
    //                     return "<p>" + donorFirst + donorMiddle + donorLast + donorSuffix + donorHonor + '</p>' + donorGradYear;
                    
    //                 } else {
                        
    //                     return "<p>Would you like to see your name here?</p><h4>Give Now</h4>"; 
    //                 }
                    
    //             });
 
             

    //         var simulation = d3.forceSimulation(datatoload)
    //             .force('charge', d3.forceManyBody().distanceMax(210).distanceMin(150))
    //             .force('center', d3.forceCenter(width / 4, height / 4))
    //             .alphaDecay(0.02)
    //             .on('tick', ticked)
    //             .force('collision', d3.forceCollide().radius(function(d) {
    //                  return 120;
    //             }));


    //         function ticked() {
    //           var u = d3.select('svg')
    //             .selectAll('foreignObject')
    //             .data(datatoload)

    //           u.enter()
    //             .append('foreignObject')
    //             .merge(u)
    //             .attr('x', function(d,i) {
    //                 return d.x
    //             })
    //             .attr('y', function(d) {
    //                 return d.y
                      
    //             })

    //           u.exit().remove()
    //         }

    //         simulation.force('y', d3.forceY().y(function(d) {
    //             return 300;   
    //         }))


    // }




    


    var getResults = function(event) {
        event.preventDefault();
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
            name = '[contains(first_name, "' +  donorName + '") or contains(last_name, "' +  donorName + '")]';
        } 

        if (donorYear) {
            year = '[education_0_graduation_year > ' + donorYear + ']';
        } 

        if (donorYearMax) {
            yearMax = '[education_0_graduation_year < ' + donorYearMax + ']';
        }

        if (donorCollege != "All Colleges") {
            college = '[contains(education_0_college, "' + donorCollege + '")]';  
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

       

    }


    
    var updateRiver = function(results) {
        if (results.length == 0) {
            $('#search-er').removeClass('hidden fadeOut').addClass('flex-container');
        } else {

            //d3.selectAll("svg").remove();
            $('#search-er').addClass('hidden fadeOut').removeClass('flex-container');
            $('#river').html('');
            setTimeout(function() { 
                loadData(results);
                tweenRiverMain.kill();
                //velocity = 300;
                //timing = getWidth(results) / velocity;
                tweenRiverMain = new TweenMax.to("#river", 0, {x: 0, ease: Power1.easeInOut, yoyo: true, repeat: -1});
                $
                Search.closeSearch();

            }, 500);
            //setTimeout(function() { Data.init(results); }, 750);
        }
        //playRiver();
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
        } 
    }

    

    var resetRiver = function() {
        //d3.selectAll("svg").remove(); //d3.selectAll("svg > *").remove();
        //Data.resetData(); //Data.resetData();
        setTimeout(function() { loadData(data.donors); }, 750);
        velocity = 100;
        timing = getWidth(data.donors) / velocity;
        tweenRiverMain = new TweenMax.to("#river", 22, {x: getMyWidth(data.donors), ease: Power1.easeInOut, yoyo: true, repeat: -1});
     
        tweenRiverMain.resume();
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
        results: results

    }

})();
