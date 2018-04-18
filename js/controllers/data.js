Data = (function() {


    var givingDataToAdd = {};
   

    var init = function(response) {
    	data = {"donors": [] };
    	console.log(response);
        
        $.each(response, function(index, value){
                var galleryArray = [];
                var relsArray = [];
                var ledArray = [];
                var rawRels;
                var rawImgs;
                var objRels;
                var objImgs;
                var ledObject;
                var arrayRels;
                var arrayImgs;
                var arrayLeds;
                var arrayGallery;
                

               
                function extractText( str ){
                    var ret;

                    if ( /"/.test( str ) ){
                        ret = str.match( /"(.*?)"/g );
                        
                    } else {
                        ret = str;
                    }
                   
                    return ret;
                }

                // if (value.relationships) {
                //     rawRels = value.relationships;
                //     objRels = extractText(rawRels);
                //     arrayRels = Object.keys(objRels).map(function (key) { return objRels[key]; });
                // } else {
                //     arrayRels = [];
                // }
            
                

                if (value.gallery) {
                    rawImgs = value.gallery;
                    objImgs = extractText(rawImgs);
                    arrayImgs = Object.keys(objImgs).map(function (key) { return objImgs[key]; });
                } else {
                    arrayImgs = [];
                }


                if (value.acf.gallery) {
                    var imageObject = value.acf.gallery;
                    arrayGallery = imageObject.map(function(a) {return a.url});
                } else {
                    arrayGallery = [];
                }

                if (value.acf.leds_to_display) {
                    ledObject = value.acf.leds_to_display;
                    arrayLeds = ledObject.map(function(a) {return a.led_num;});
                } else {
                    arrayLeds = [];
                }



                var dataToAdd = {};
                
            
                dataToAdd["ID"] = value.id;
                dataToAdd["bubble_type"] = "donor";
                dataToAdd["prefix"] = value.acf.prefix;
                dataToAdd["first_name"] = value.acf.first_name;
                dataToAdd["middle"] = value.acf.middle;
                dataToAdd["last_name"] = value.acf.last_name;
                dataToAdd["suffix"] = value.acf.suffix;
                dataToAdd["honorific"] = value.acf.honorific;
                dataToAdd["giving_level"] = value.acf.giving_level;
                dataToAdd["giving_amount"] = value.acf.giving_amount;
                dataToAdd["bio"] = value.acf.biography;
                dataToAdd["tribute_heading"] = value.acf.tribute_heading;
                dataToAdd["tribute_message"] = value.acf.tribute_message;
                dataToAdd["rels"] = value.acf.relationships; //relsArray
                dataToAdd["education_0_degree"] = value.acf.education[0].degree; //value.education_0_degree
                dataToAdd["education_0_college"] = value.acf.education[0].college; //value.education_0_college
                dataToAdd["education_0_graduation_year"] = value.acf.education[0].graduation_year; //value.education_0_graduation_year
                dataToAdd["primary_img"] = value.acf.primary_img; //
                dataToAdd["galleryArray"] = arrayGallery; //galleryArray
                dataToAdd["video"] = value.acf.video;
                dataToAdd["video_poster"] = value.acf.video_poster;
                dataToAdd["bubble_line_1"] = '';
                dataToAdd["bubble_line_2"] = '';
                dataToAdd["panel_heading"] = '';
                dataToAdd["panel_text"] = '';
                dataToAdd["panel_phone"] = '';
                dataToAdd["panel_email"] = '';
                dataToAdd["ledstodisplay"] = ledArray; 

        
                data["donors"].push(dataToAdd);
               
                


                // if (value.primary_img) {
                //     $.getJSON("http://dev.interactivemechanics.com/tju-donor-wall-cms/index.php/wp-json/wp/v2/media/" + value.primary_img, function(d) {
                //         if (d.source_url) {
                //             data["donors"][index]["primary_img"] = d.source_url;
                //         }
                //     });
                // }

                // if (value.video) {
                //      $.getJSON("http://dev.interactivemechanics.com/tju-donor-wall-cms/index.php/wp-json/wp/v2/media/" + value.video, function(d) {
                //         if (d.source_url) {
                //             data["donors"][index]["video"] = d.source_url;
                //         }
                //     });
                // }

                // if (value.video_poster) {
                //     $.getJSON("http://dev.interactivemechanics.com/tju-donor-wall-cms/index.php/wp-json/wp/v2/media/" + value.video_poster, function(d) {
                //         if (d.source_url) {
                //             data["donors"][index]["video_poster"] = d.source_url;
                //         }
                //     }); 
                // }

               
                if (arrayImgs.length != 0) {
                	for (var i = 0; i < arrayImgs.length; i++) {
                		var str;
                		var newImgURL;
                		var newStr;
                		str = arrayImgs[i];
                		newStr = str.replace(/"([^"]+(?="))"/g, '$1');
                		$.getJSON("http://dev.interactivemechanics.com/tju-donor-wall-cms/index.php/wp-json/wp/v2/media/" + newStr, function(d) {
                            if (d.source_url) {
                                newImgURL = d.source_url;
                                galleryArray.push(newImgURL);
                            } 
                        });
                	}
                }

                // if (arrayRels.length != 0) {
                //     for (var i = 0; i < arrayRels.length; i++) {
                //         var str;
                //         var newStr;
                //         str = arrayRels[i];
                //         newStr = str.replace(/"([^"]+(?="))"/g, '$1');
                //         newInt = parseInt(newStr);
                //         relsArray.push(newInt);
                //     }

                // }




                if (arrayLeds.length != 0) {
                    for (var i = 0; i < arrayLeds.length; i++) {
                        var str;
                        var newStr;
                        str = arrayLeds[i];
                        newStr = str.replace(/"([^"]+(?="))"/g, '$1');
                        newInt = parseInt(newStr);
                        ledArray.push(newInt);
                    }
                }




        });

        $.getJSON(givingData, function(givingResponse) {
           intersperseGivingData(givingResponse); 
        }, 'json');

      
        var intersperseGivingData = function(givingResponse) {
            $.each(givingResponse, function(index, value) {
                givingDataToAdd["ID"] = value.ID;
                givingDataToAdd["bubble_type"] = "giving";
                givingDataToAdd["giving_level"] = '90000';
                givingDataToAdd["prefix"] = '';
                givingDataToAdd["first_name"] = value.bubble_line_1;
                givingDataToAdd["middle"] = '';
                givingDataToAdd["last_name"] = '';
                givingDataToAdd["suffix"] = '';
                givingDataToAdd["honorific"] = '';
                givingDataToAdd["giving_level"] = '';
                givingDataToAdd["giving_amount"] = '';
                givingDataToAdd["bio"] = '';
                givingDataToAdd["tribute_heading"] = '';
                givingDataToAdd["tribute_message"] = '';
                givingDataToAdd["rels"] = [];
                givingDataToAdd["edu_0_college"] = '';
                givingDataToAdd["edu_0_degree"] = '';
                givingDataToAdd["edu_0_college"] = '';
                givingDataToAdd["edu_0_grad_yr"] = '';
                givingDataToAdd["primary_img"] = '';
                givingDataToAdd["galleryArray"] = ''; //arrayImgs
                givingDataToAdd["bubble_line_1"] = value.bubble_line_1;
                givingDataToAdd["bubble_line_2"] = value.bubble_line_2;
                givingDataToAdd["panel_heading"] = value.panel_heading;
                givingDataToAdd["panel_text"] = value.panel_text;
                givingDataToAdd["panel_phone"] = value.panel_phone;
                givingDataToAdd["panel_email"] = value.panel_email;
                //givingDataToAdd["x"] = 1700;
                //givingDataToAdd["y"] = 300; 
            });

        }

         for (i = 0; i < data.donors.length; i++) {
            if (i > 0 && i % 10 == 0 && data.donors.length > 10) {
                data["donors"].splice(i, 0, givingDataToAdd);
            }
        }






        console.log(data);
        console.log(givingDataToAdd.first_name);  //sometimes undefined and sometimes give now

    }

    var searchData = function(results) {

    }




    var resetData = function() {
         $.get(plainData, function(response) {
                init(response);
        }, 'json');       

    }
    

 	


  	return {
        init: init,
        resetData: resetData,
        givingDataToAdd: givingDataToAdd
    }

})();