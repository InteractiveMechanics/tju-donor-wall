River = (function() {

    
    var 
        width = 6500,
        height = 1000,
        format = d3.format(",d");

    var results;
    var myIncrement = 500;
    var tweenRiverMain = new TweenMax.to("#river", 35, {x: "44%", ease: Power0.easeNone, repeat: -1});
    var tweenRiverSwipeLeft = new TweenMax.to("#river", .35, {left: "-="+myIncrement, ease: Power0.easeNone});
    var tweenRiverSwipeRight = new TweenMax.to("#river", .35, {left: "+="+myIncrement, ease: Power0.easeNone});

    
    
	var init = function() {
        bindEvents();
    }





    var resetRiver = function() {
        console.log('resetRiver');
        d3.selectAll("svg > *").remove();
        Data.resetData();
        setTimeout(function() { loadData(data.donors); }, 1000);
        //TweenMax.to("#river", 40, {x: "100%", ease: Power0.easeNone});
        tweenRiverMain.play();
    }

    

    var svgContainer = d3.select("#river").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "riverpanel");


    var nodes;
  
    //data/testing.json
    var loadData = function(datatoload) {
            console.log(datatoload.length);

            // var circles = svgContainer.selectAll("circle")
            //     .data(datatoload)
            //     .enter()
            //     .append("circle");

            // var circleAttributes = circles
            //     .classed("circle", true)
            //     .classed("donor", true)
            //     .classed("sm", function(d) {
            //         if (d.giving_level == 9999) {
            //             return true;
            //         }
            //     }) 
            //     .classed("large", function(d) {
            //         if (d.giving_level == 10000) {
            //             return true;
            //         }
            //     })
            //     .attr('data-donor', function(d, i) {
            //         return i;
            //     })
            //     .style("fill", function(d) {
            //         var returnColor;
            //         if (d.giving_level ===  9999) { returnColor = "transparent"; 
            //         } else { returnColor = "#ff0000"; }
            //         return returnColor;
            //     })
            //     .attr('id', function(d) {
            //         return d.ID;
            //     })
            //     .attr("cx", function (d,i) { return (i+1) * 170; })
            //     .attr("cy", function (d,i) { return (i+1) * 50; })
            //     .attr("r", function(d) {
            //         if (d.giving_level == 9999) {
            //             return 85;
            //         } else {
            //             return 105;
            //         }
            //     });

            // var circleCoords;
            // var testingCircle = function(i) {
            //     circleCoords = $('circle[data-donor=' + i + ']')[0].getBoundingClientRect();
            //     return circleCoords;
            // }


            var textNodes = svgContainer.selectAll("text")
                .data(datatoload);
                console.log(datatoload);

            foreignObjects = textNodes.enter().append("foreignObject")
                //.attr("x",function (d, i) { return parseInt(testingCircle(i).x)  } )
                //.attr("y",function (d, i) { return parseInt(testingCircle(i).y) - 30 } )
                .attr('data-donor', function(d, i) {
                   return i;
                })
                .classed("donor", function(d){
                    if (d.bubble_type == "donor") {
                        return true;
                    } 
                })
                .classed("give", function(d) {
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
                .html(function(d) {
                    //var bubbleId; 
                    var bubbleLine1;
                    //var bubbleLine2;
                    var donorPrefix;
                    var donorFirst;
                    var donorMiddle;
                    var donorLast;
                    var donorSuffix;
                    var donorHonor;
                    var donorGradYear;

                    if (d.bubble_line_1) {
                        bubbleLine1 = d.bubble_line_1;
                    } else {
                        bubbleLine1 = '';
                    }
                    

                    if (d.prefix) {
                        donorPrefix = d.prefix + ' ';
                    } else {
                        donorPrefix = '';
                    }

                    if (d.first_name && d.first_name != 'undefined') {
                        donorFirst = d.first_name + ' ';
                    } else {
                        donorFirst = 'Give Now';
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

                    return "<p>" + bubbleLine1 + donorPrefix + donorFirst + donorMiddle + donorLast + donorSuffix + donorHonor + '</p>' + donorGradYear;
                    //return "<p>Testing Testing</p>";
                    
                });

           var simulation = d3.forceSimulation(datatoload)
                .force('charge', d3.forceManyBody().strength(-300))
                .force('center', d3.forceCenter(width / 4, height / 4))
                .on('tick', ticked)
                .force('collision', d3.forceCollide().radius(function(d) {
                    return 120
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




    var collide = function(node) {
        var r = 105,
        nx1 = node.x - r,
        nx2 = node.x + r,
        ny1 = node.y - r,
        ny2 = node.y + r;
            
        return function(quad, x1, y1, x2, y2) {
            if (quad.point && (quad.point !== node)) {
                var x = node.x - quad.point.x,
                y = node.y - quad.point.y,
                l = Math.sqrt(x * x + y * y),
                r = node.radius + quad.point.radius;
                
                if (l < r) {
                    l = (l - r) / l * .5;
                    node.x -= x *= l;
                    node.y -= y *= l;
                    quad.point.x += x;
                    quad.point.y += y;
                }
            
            }
        
                
            return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
        }
    } 



    var getResults = function(event) {
        event.preventDefault();
        var name = '';
        var year = '';
        var yearMax = '';
        var donorName = $('#donor-name').val();
        var donorYear = $('#donor-year').val();
        var donorYearMax = $('#donor-year-max').val();
        console.log("donor name: " + donorName + " donor year: " + donorYear + " donor year max: " + donorYearMax);

        if (donorName) {
            name = '[contains(first_name, "' +  donorName + '") or contains(last_name, "' +  donorName + '")]';
        }


        if (donorYear) {
            year = '[edu_0_grad_yr > ' + donorYear + ']';
        } 

        if (donorYearMax) {
            yearMax = '[edu_0_grad_yr < ' + donorYearMax + ']';
        } 

        results = JSON.search(data,  '//*' + name + year + yearMax);
        console.log("LOOK AT ME ", results);
        updateRiver(results);

    }


    
    var updateRiver = function(results) {
        //Data.init(results);
        d3.selectAll("svg > *").remove();
        setTimeout(function() { loadData(results); }, 1000);
    }


    var hammerSwipe = function() {
         var river = document.getElementById("river");
       
    
        Hammer(river).on("swipeleft", function() {
            $(river).animate({left: "-=700"}, 250, "linear");
            //tweenRiverSwipeLeft.play();
            console.log('swipeleft');
       

        });
        
        Hammer(river).on("swiperight", function() {
            $(river).animate({left: "+=700"}, 250, "linear");
            //tweenRiverSwipeRight.play();
            console.log('swiperight');       
        
        });
    }



    var bindEvents = function() {
        $(document).ready(resetRiver);
        $(document).ready(hammerSwipe);
    }


  	return {
        init: init,
        getResults: getResults,
        updateRiver: updateRiver,
        resetRiver: resetRiver,
        tweenRiverMain: tweenRiverMain

    }

})();
