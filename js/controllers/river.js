River = (function() {

    var width = 500,
        height = 500,
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

    var bubble = d3.pack()
        .size(width, height)
        .padding(7);

   




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
                .attr("cx", function (d) { return d.id * 25; })
                .attr("cy", function (d) { return d.id * 25; })
                .attr("r", function(d) {
                    if (d.giving == 5000) {
                        return 85;
                    } else {
                        return 105;
                    }
                })


            console.log(json);
        });

  

           
    }

    




    var bindEvents = function() {
    	$(document).ready(helloworld);
        //$(document).ready(loadData);
    }


  	return {
        init: init
    }

})();
