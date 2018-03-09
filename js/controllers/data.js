Data = (function() {


    var init = function(response) {
    	data = {"donors": [] };
    	console.log(response);
        
        $.each(response, function(index, value){
                var galleryArray = [];
                var relsArray = [];
                var rawRels;
                var rawImgs;
                var objRels;
                var objImgs;
                var arrayRels;
                var arrayImgs;
               
                function extractText( str ){
                    var ret;

                    if ( /"/.test( str ) ){
                        ret = str.match( /"(.*?)"/g );
                        
                    } else {
                        ret = str;
                    }
                   
                    return ret;
                }

                if (value.relationships) {
                    rawRels = value.relationships;
                    objRels = extractText(rawRels);
                    arrayRels = Object.keys(objRels).map(function (key) { return objRels[key]; });
                } else {
                    arrayRels = [];
                }

                if (value.gallery) {
                    rawImgs = value.gallery;
                    objImgs = extractText(rawImgs);
                    arrayImgs = Object.keys(objImgs).map(function (key) { return objImgs[key]; });
                } else {
                    arrayImgs = [];
                }


                //if (objs)
                // var objRels = extractText(rawRels);
                // var objImgs = extractText(rawImgs);
                // var arrayRels = Object.keys(objRels).map(function (key) { return objRels[key]; });
                // var arrayImgs = Object.keys(objImgs).map(function (key) { return objImgs[key]; });


                //console.log(array);
            

                var dataToAdd = {};
               

                //dataToAdd["properties"] = {};
                dataToAdd["ID"] = value.ID;
                dataToAdd["prefix"] = value.prefix;
                dataToAdd["first_name"] = value.first_name;
                dataToAdd["middle"] = value.middle;
                dataToAdd["last_name"] = value.last_name;
                dataToAdd["suffix"] = value.suffix;
                dataToAdd["honorific"] = value.honorific;
                dataToAdd["giving_level"] = value.giving_level;
                dataToAdd["giving_amount"] = value.giving_amount;
                dataToAdd["bio"] = value.biography;
                dataToAdd["tribute_heading"] = value.tribute_heading;
                dataToAdd["tribute_message"] = value.tribute_message;
                dataToAdd["rels"] = relsArray;
                dataToAdd["edu_0_college"] = value.education_0_college;
                dataToAdd["edu_0_degree"] = value.education_0_degree;
                dataToAdd["edu_0_college"] = value.education_0_college;
                dataToAdd["edu_0_grad_yr"] = value.education_0_graduation_year;
                dataToAdd["primary_img"] = '';
                dataToAdd["galleryArray"] = galleryArray; //arrayImgs

        
                data["donors"].push(dataToAdd);

                if (value.primary_img) {
                    $.getJSON("http://dev.interactivemechanics.com/tju-donor-wall-cms/index.php/wp-json/wp/v2/media/" + value.primary_img, function(d) {
                        if (d.source_url) {
                            data["donors"][index]["primary_img"] = d.source_url;
                        }
                    });
                }

               
                if (arrayImgs.length != 0) {
                	for (var i = 0; i < arrayImgs.length; i++) {
                		var str;
                		var newImgURL;
                		var newStr;
                		str = arrayImgs[i];
                		newStr = str.replace(/"([^"]+(?="))"/g, '$1');
                		console.log(newStr);
                		newImgURL = "http://dev.interactivemechanics.com/tju-donor-wall-cms/index.php/wp-json/wp/v2/media/" + newStr;
                		galleryArray.push(newImgURL);
                	}
                }

                if (arrayRels.length != 0) {
                    for (var i = 0; i < arrayRels.length; i++) {
                        var str;
                        var newStr;
                        str = arrayRels[i];
                        newStr = str.replace(/"([^"]+(?="))"/g, '$1');
                        newInt = parseInt(newStr);
                        relsArray.push(newInt);
                    }

                }


        });

        console.log(data);
    	console.log(data.donors[0].bio);

    }

    
    

    var resetData = function() {
         $.get(jsonData, function(response) {
                init(response);
        }, 'json');
    }
    

 	


  	return {
        init: init,
        resetData: resetData
    }

})();