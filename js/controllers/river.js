River = (function() {

    
    var 
        width = 1000,
        height = 1000,
        format = d3.format(",d");


    
	var init = function() {
        bindEvents();
    }

    
    
    var helloworld = function() {
    	console.log('hello, world!');
    }

    var svgContainer = d3.select("#river").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("id", "riverpanel");




    var loadData = function() {
        d3.json("data/testing.json", function(error, json) {
            if (error) throw error;

            var circles = svgContainer.selectAll("circle")
                .data(json.nodes)
                .enter()
                .append("circle");

            var circleAttributes = circles
                 .classed("circle", true)
                 .classed("sm", function(d) {
                    if (d.giving == 5000) {
                        return true;
                    };
                 })
                 .classed("large", function(d) {
                    if (d.giving == 10000) {
                        return true;
                    };
                 })
                .style("fill", function(d) {
                    var returnColor;
                    if (d.giving ===  5000) { returnColor = "transparent";
                     } else { returnColor = "#ff0000"; }
                    return returnColor;
                 })
                .attr("cx", function (d) { return d.id * 125 + (d.id * 20); })
                .attr("cy", function (d) { return d.id * 125 + (d.id * 20); })
                .attr("r", function(d) {
                    if (d.giving == 5000) {
                        return 85;
                    } else {
                        return 105;
                    }
                })



            console.log(json);


            var textNodes = svgContainer.selectAll("text")
                .data(json.nodes);

            foreignObjects = textNodes.enter().append("foreignObject")
                .attr("x",function (d) { return d.id * 125 + (d.id * 20); } )
                .attr("y",function (d) { return d.id * 125 + (d.id * 20); } )
                .attr("width",function (d) {  
                    if (d.giving == 5000) {
                        return 170;
                    } else {
                        return 210;
                    }
                })
                .attr("height",function (d) {
                     if (d.giving == 5000) {
                        return 170;
                    } else {
                        return 210;
                    } 
                })

            htmlDOMs = foreignObjects.append("xhtml:div");

            htmlDivs = htmlDOMs.append("div")
                .classed("circle", true)
                .classed("large", function(d) {
                     if (d.giving == 10000) {
                        return true;
                    } 
                })
                .style("background-image", function(d) {
                    var returnHeadshot;
                    if (d.giving == 10000) {
                        returnHeadshot = 'url("'+ d.headshot + '")';
                    }
                    return returnHeadshot;
                })
                .classed("sm", function(d) {
                    if (d.giving == 5000) {
                        return true;
                    } 
                })
                .html(function(d) { return "<p>" + d.name + '</p><p>' + d.year + '</p>'});



            // var textLabels = text
            //     .attr("x", function(d) { return d.id * 105 + (d.id * 20); })
            //     .attr("y", function(d) { return d.id * 125 + (d.id * 20); })
            //     .text( function (d) { return d.name ; })
            //     .classed('circle-text', true);


        });

  

           
    }

    




    var bindEvents = function() {
    	$(document).ready(helloworld);
        $(document).ready(loadData);
    }


  	return {
        init: init
    }

})();
