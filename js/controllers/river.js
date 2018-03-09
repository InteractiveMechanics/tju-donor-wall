River = (function() {

    
    var 
        width = 3000,
        height = 1000,
        format = d3.format(",d");

    var results;

    
	var init = function() {
        bindEvents();
    }


    var resetRiver = function() {
        console.log('resetRiver');
        d3.selectAll("svg > *").remove();
        Data.resetData();
        setTimeout(function() { loadData(data.donors); }, 1000);
        
    }

    

    var svgContainer = d3.select("#river").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "riverpanel");


    var nodes;
  
    //data/testing.json
    var loadData = function(datatoload) {

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

            foreignObjects = textNodes.enter().append("foreignObject")
                //.attr("x",function (d, i) { return parseInt(testingCircle(i).x)  } )
                //.attr("y",function (d, i) { return parseInt(testingCircle(i).y) - 30 } )
                .attr('data-donor', function(d, i) {
                   return i;
                })
                .classed("donor", true)
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
                .style("background-image", function(d) {
                    var returnHeadshot;
                    if (d.giving_level == 10000 && d.primary_img.length != 0) {
                        returnHeadshot = 'url("'+ d.primary_img +'")';
                    } else {
                        returnHeadshot = 'linear-gradient(45deg, rgba(17,22,50,1) 0%,rgba(30,38,85,1) 50%,rgba(61,70,123,1) 100%)';
                    }
                    return returnHeadshot;
                })
                .classed("sm", function(d) {
                    if (d.giving_level == 9999) {
                        return true;
                    } 
                })
                .html(function(d) { 
                    var donorPrefix;
                    var donorFirst;
                    var donorMiddle;
                    var donorLast;
                    var donorSuffix;
                    var donorHonor;

                    if (d.prefix.length != 0) {
                        donorPrefix = d.prefix + ' ';
                    } else {
                        donorPrefix = '';
                    }

                    if (d.first_name.length != 0 && d.first_name != 'undefined') {
                        donorFirst = d.first_name + ' ';
                    } else {
                        donorFirst = '';
                    }

                    if (d.middle.length != 0) {
                        donorMiddle = d.middle + ' ';
                    } else {
                        donorMiddle = '';
                    }

                    if (d.last_name.length != 0) {
                        donorLast = d.last_name + ' '; 
                    } else {
                        donorLast = '';
                    }

                    if (d.suffix.length != 0) {
                        donorSuffix = d.suffix + ' ';
                    } else {
                        donorSuffix = '';
                    }

                    if (d.honorific.length != 0) {
                        donorHonor = d.honorific + ' ';
                    } else {
                        donorHonor = '';
                    }

                    return "<p id='" + d.ID +  "''>" + donorPrefix + donorFirst + donorMiddle + donorLast + donorSuffix + donorHonor + '</p><p>' + d.edu_0_grad_yr + '</p>'
                });

           var simulation = d3.forceSimulation(datatoload)
                .force('charge', d3.forceManyBody().strength(-250))
                .force('center', d3.forceCenter(width / 4, height / 4))
                .on('tick', ticked)
                .force('collision', d3.forceCollide().radius(function(d) {
                    return d.radius
                }));


            function ticked() {
              var u = d3.select('svg')
                .selectAll('foreignObject')
                .data(datatoload)

              u.enter()
                .append('foreignObject')
                .merge(u)
                .attr('x', function(d) {
                  return d.x
                })
                .attr('y', function(d) {
                  return d.y
                })

              u.exit().remove()
            }

            simulation.force('y', d3.forceY().y(function(d) {
                return 0;   
            }))


    }




    var collide = function(node) {
        var r = node.radius + 16,
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




    var bindEvents = function() {
        $(document).ready(resetRiver);
    }


  	return {
        init: init,
        getResults: getResults,
        updateRiver: updateRiver,
        resetRiver: resetRiver
    }

})();
