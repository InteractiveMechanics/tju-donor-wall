Leds = (function() {

    var ledArray = [];
    var isPaused = false;
    var socket;

	var init = function() {
		startServer();
        animate();
        bindEvents();
    }

	// Set pixels to a given color
	var writeFrame = function() {
        //console.log(ledArray);
        var strips = 160;
        var ledsPerStrip = 60;

		var r = 0;
		var g = 0;
		var b = 0;

        var upSpeed = 2;
        var downSpeed = 2;

		var packet = new Uint8ClampedArray(4 + (strips * (ledsPerStrip+4)) * 3);

		if (socket.readyState != 1 /* OPEN */) {
			// The server connection isn't open. Nothing to do.
			return;
		}

		if (socket.bufferedAmount > packet.length) {
			// The network is lagging, and we still haven't sent the previous frame.
			// Don't flood the network, it will just make us laggy.
			// If fcserver is running on the same computer, it should always be able
			// to keep up with the frames we send, so we shouldn't reach this point.
			return;
		}

		// Dest position in our packet. Start right after the header.
		var dest = 4;


        for (var s = 0, p = 0; s < strips && p < ledsPerStrip; p++, s=(p==ledsPerStrip)?s+1:s, p=(p==ledsPerStrip)?p=0:p) {

                var led = (s * ledsPerStrip) + p;

                if ( ledExists(led, ledArray) ) {
                    var i = ledArray.findIndex((obj => obj.id == led));
                    if (ledArray[i].state == "down" && ledArray[i].lumos == 0) {
                            packet[dest++] = r;
                            packet[dest++] = g;
                    	    packet[dest++] = b;
			        } else {
        			    if (ledArray[i].state == "on") {
        				// Keep it at full lumos
        				    ledArray[i].lumos = 117;
        			    } else if (ledArray[i].state == "down" && ledArray[i].lumos > 0) {
        				// Decrease lumos by one
        				    ledArray[i].lumos = ledArray[i].lumos - (1 * downSpeed);
        			    } else if (ledArray[i].state == "up" && ledArray[i].lumos < 117) {
        				// Increment lumos up by one
        				    ledArray[i].lumos = ledArray[i].lumos + (1 * upSpeed);
        			    } else if (ledArray[i].state == "up" && ledArray[i].lumos >= 117) {
        				    ledArray[i].state = "on";
        			    }

        			    packet[dest++] = r + ledArray[i].lumos;
        			    packet[dest++] = g + ledArray[i].lumos;
        			    packet[dest++] = b + ledArray[i].lumos;
			        }
                } else {
                    packet[dest++] = r;
                    packet[dest++] = g;
                    packet[dest++] = b;
                }

        }

		socket.send(packet.buffer);
		socket.send(packet.buffer);
	}
    
    var startServer = function() {
	    // Connect to a Fadecandy server running on the same computer, on the default port
	    socket = new WebSocket('ws://127.0.0.1:7890');
	
	    // Put some connection status text in the corner of the screen
	    // $('#connectionStatus').text('Connecting to fcserver...');
	    socket.onclose = function(event) { 
			setTimeout(function(){ startServer() }, 5000);
		}
    }

    var animate = function() {
        setInterval(writeFrame, 120);        
    }

    //this needs to run every second, not just as reset
    var getLedsOnScreen = function(data) {
        var OnScreenLedsArray = [];
        for (var i=0; i<data.length; i++) {
            var thisId = data[i].ID;
            var thisEl = document.querySelector('[data-id="'+ thisId + '"]');
            if (thisEl) {
                if (checkVisible(thisEl)) {
                    //code is same as River.addLedsToArray, but when called here as River.addLedsToArray(data[i]), gets an error -- cannot get length of undefined
                    if (data[i].ledstodisplay) {
                        var donorLedArray = data[i].ledstodisplay;
                        for (j = 0; j<donorLedArray.length; j++) {
                             OnScreenLedsArray.push(donorLedArray[j]);
                        }
                    }
                }
            } 
        }
        // console.log(OnScreenLedsArray);
        return OnScreenLedsArray;
    }

    var resetLeds = function() {
        //console.log('resetLeds');
        for (var i = 0; i<ledArray.length; i++) {
            ledArray[i].state = "down";
        }
    }

    var checkLedArray = function(ledsToAdd) {
        for (var i = 0; i<ledsToAdd.length; i++) {
            var ledTest = ledExists(ledsToAdd[i], ledArray);
            if (ledTest) {
                //if the led is already in the array, modify it 
                var thisLed = ledsToAdd[i];
                objIndex = ledArray.findIndex((obj => obj.id == thisLed));
                ledArray[objIndex].state = "up";
                
            } else {
                //if the led is not in the aray, add it
                ledArray.push({id: ledsToAdd[i], lumos: 0, state: 'up'});
                //console.log(ledArray);
            }
        }

    }

    var ledExists = function(id, arrayToTest) {
        return arrayToTest.some(function(el) {
            return el.id === id;
        }); 
    }


    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
        // if x is greater than zero or less than the client width, it is on the screen, so return true
        return (rect.x > 0 && rect.x <= viewWidth);
    }


    var bindEvents = function() {
    }

    return {
        init: init,
        writeFrame: writeFrame,
        resetLeds: resetLeds,
        checkLedArray: checkLedArray,
        ledArray: ledArray,
        getLedsOnScreen: getLedsOnScreen,
        isPaused: isPaused


    }

})();
