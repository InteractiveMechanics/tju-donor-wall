River = (function() {

    
    var width = 6500,
        height = 1000,
        results;

    var river = document.getElementById('river');
    var myIncrement = 500;
    var tweenRiverMain = new TweenMax.to("#river", 35, {x: "100%", ease: Power0.easeNone, repeat: -1});
    

    //dead variables 
    // var tweenRiverSwipeLeft = new TweenMax.to("#river", .35, {left: "-="+myIncrement, ease: Power0.easeNone});
    // var tweenRiverSwipeRight = new TweenMax.to("#river", .35, {left: "+="+myIncrement, ease: Power0.easeNone});
    // var nodes;
    // var format = d3.format(" ,d");

    
    
	var init = function() {
        bindEvents();
    }


   

    var svgContainer = d3.select("#river").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "riverpanel");


    
    //data/testing.json
    var loadData = function(datatoload) {
          
            var textNodes = svgContainer.selectAll("text")
                .data(datatoload);

            foreignObjects = textNodes.enter().append("foreignObject")
                .attr('data-donor', function(d, i) {
                   return i;
                })
                .classed("donor", function(d){
                    if (d.bubble_type == "donor") {
                        return true;
                    } 
                })
                .classed("give", function(d, i) {
                    if (d.bubble_type !== "donor") {
                        return true; 
                    } 
                })
                .classed("sm", function(d) {
                    if (d.giving_level == 9999) {
                        return true;
                    }
                }) 
                .classed("large", function(d) {
                    if (d.giving_level == 10000) {
                        return true;
                    }
                })
                .attr("width",function (d) {  
                    if (d.giving_level == 9999) {
                        return 170;
                    } else {
                        return 210;
                    }
                })
                .attr("height",function (d) {
                     if (d.giving_level == 9999) {
                        return 170;
                    } else {
                        return 210;
                    } 
                });

            htmlDOMs = foreignObjects.append("xhtml:div");

            htmlDivs = htmlDOMs.append("div")
                .classed("circle", true)
                .classed("large", function(d) {
                     if (d.giving_level == 10000) {
                        return true;
                    } 
                })
                .classed("sm", function(d) {
                    if (d.giving_level == 9999) {
                        return true;
                    } 
                })
                .classed("give", function(d) {
                    if (d.giving_level != 10000 && d.giving_level != 9999) {
                        return true;
                    }
                })
                .style("background-image", function(d) {
                    var returnHeadshot;
                    if (d.giving_level == 10000 && d.primary_img.length != 0) {
                        returnHeadshot = 'url("'+ d.primary_img +'")';
                    } else if (d.giving_level == 10000) {
                        returnHeadshot = 'linear-gradient(45deg, rgba(17,22,50,1) 0%,rgba(30,38,85,1) 50%,rgba(61,70,123,1) 100%)';
                    } else if (d.giving_level == 9999) {
                        returnHeadshot = 'linear-gradient(45deg, rgba(41,73,130,1) 0%,rgba(96,132,195,1) 50%,rgba(137,165,214,1) 100%)';
                    } else {
                        returnHeadshot = 'linear-gradient(45deg, rgba(72,20,30,1) 1%,rgba(160,41,68,1) 50%,rgba(189,80,104,1) 100%)';
                    }                    
                    return returnHeadshot;
                })
                .html(function(d, i) { 
                    var donorFirst;
                    var donorMiddle;
                    var donorLast;
                    var donorSuffix;
                    var donorHonor;
                    var donorGradYear;


                    if (d.first_name && d.first_name != 'undefined') {
                        donorFirst = d.first_name + ' ';
                    } else {
                        donorFirst = '';
                    }

                    if (d.middle) {
                        donorMiddle = d.middle + ' ';
                    } else {
                        donorMiddle = '';
                    }

                    if (d.last_name) {
                        donorLast = d.last_name + ' '; 
                    } else {
                        donorLast = '';
                    }

                    if (d.suffix) {
                        donorSuffix = d.suffix + ' ';
                    } else {
                        donorSuffix = '';
                    }

                    if (d.honorific) {
                        donorHonor = d.honorific + ' ';
                    } else {
                        donorHonor = '';
                    }

                    if (d.edu_0_grad_yr) {
                        donorGradYear = '<p>' + d.edu_0_grad_yr + '</p>';
                    } else {
                        donorGradYear = '';
                    }

                    if (i % 10 != 0 || i == 0) {
                        return "<p>" + donorFirst + donorMiddle + donorLast + donorSuffix + donorHonor + '</p>' + donorGradYear;
                    
                    } else {
                        
                        return "<p>Would you like to see your name here?</p><h4>Give Now</h4>"; 
                    }
                    
                });

           var simulation = d3.forceSimulation(datatoload)
                .force('charge', d3.forceManyBody().strength(-300))
                .force('center', d3.forceCenter(width / 4, height / 4))
                .on('tick', ticked)
                .force('collision', d3.forceCollide().radius(function(d) {
                    return 120;
                }));


            function ticked() {
              var u = d3.select('svg')
                .selectAll('foreignObject')
                .data(datatoload)

              u.enter()
                .append('foreignObject')
                .merge(u)
                .attr('x', function(d,i) {
                    return d.x
                })
                .attr('y', function(d) {
                    return d.y
                      
                })

              u.exit().remove()
            }

            simulation.force('y', d3.forceY().y(function(d) {
                return 300;   
            }))


    }




    


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
            year = '[edu_0_grad_yr > ' + donorYear + ']';
        } 

        if (donorYearMax) {
            yearMax = '[edu_0_grad_yr < ' + donorYearMax + ']';
        }

        if (donorCollege) {
            college = '[contains(edu_0_college, "' + donorCollege + '")]';  
        }



        results = JSON.search(data,  '//*' + name + year + yearMax + college);
        console.log("LOOK AT ME ", results);
        console.log(donorCollege);
        
       
        updateRiver(results);
       

    }


    
    var updateRiver = function(results) {
        d3.selectAll("svg > *").remove();
        setTimeout(function() { loadData(results); }, 500);
        playRiver();
        if (results.length == 0) {
            $('#search-er').removeClass('hidden fadeOut');
        }
    }


    var hammerSwipeRight = function() {
         var river = document.getElementById("river");
       
    
        // new Hammer(river).on("swipeleft", function() {
        //     $(river).animate({left: "-=700"}, 250, "linear");
        //     console.log('swipeleft');
       

        // });
        
        new Hammer(river).on("swiperight", function(ev) {
            //$(river).animate({left: "+=700"}, 250, "linear");
            console.log(ev);       
        
        });
    }

    var hammerSwipeLeft = function() {
         var river = document.getElementById("river");
       
    
        new Hammer(river).on("swipeleft", function(ev) {
            //$(river).animate({left: "-=700"}, 250, "linear");
            console.log(ev);
       

        });
        
        
    }


   


    var pauseRiver = function() {
        if (TweenMax.isTweening( '#river') ) {
            tweenRiverMain.pause();
        // } else {
        //     tweenRiverMain.play();
        } 

    }

    var playRiver = function() {
         if (!TweenMax.isTweening( '#river') ) {
            tweenRiverMain.play();
        } 
    }

   

   

    var resetRiver = function() {
        d3.selectAll("svg > *").remove();
        Data.resetData(); //Data.resetData();
        setTimeout(function() { loadData(data.donors); }, 750);
        //tapweenRiverMain.resume();
    }



    var bindEvents = function() {
        //$(document).ready(resetRiver);
        $(document).ready(loadData(data.donors));
        $(document).ready(hammerSwipeRight);
        //$(document).ready(hammerSwipeLeft);
        $(document).on('click tap', '#river', pauseRiver);
    }


  	return {
        init: init,
        getResults: getResults,
        updateRiver: updateRiver,
        resetRiver: resetRiver,
        playRiver: playRiver,
        tweenRiverMain: tweenRiverMain

    }

})();
