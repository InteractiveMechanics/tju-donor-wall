Leds = (function() {

    var ledArray = [];

	var init = function() {
        animate();
        bindEvents();
    }

	// Set pixels to a given color
	var writeFrame = function() {
        //console.log(ledArray);
        var strips = 7;
        var ledsPerStrip = 60;

		var r = 0;
		var g = 0;
		var b = 0;

        var upSpeed = 2;
        var downSpeed = 1;

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


        for (var s = 0; s < strips; s++) {
            for(var p = 0; p < ledsPerStrip; p++) {

                var led = (s * ledsPerStrip) + p;

                if ( ledExists(led, ledArray) ) {
                    var i = ledArray.findIndex((obj => obj.id == led));

                    if (ledArray[i].state == "on") {
                        // Keep it at full lumos
                        ledArray[i].lumos = 117;
                    } else if (ledArray[i].state == "down" && ledArray[i].lumos > 0) {
                        // Decrease lumos by one
                        ledArray[i].lumos = ledArray[i].lumos - (1 * downSpeed);
                    } else if (ledArray[i].state = "up" && ledArray[i].lumos < 117) {
                        // Increment lumos up by one
                        ledArray[i].lumos = ledArray[i].lumos + (1 * upSpeed);
                    } else if (ledArray[i].state = "up" && ledArray[i].lumos == 117) {
                        ledArray[i].state == "on";
                    }

                    packet[dest++] = r + ledArray[i].lumos;
                    packet[dest++] = g + ledArray[i].lumos;
                    packet[dest++] = b + ledArray[i].lumos;

                    if (ledArray[i].state == "down" && ledArray[i].lumos == 0) {
                        // Remove from ledArray
                        ledArray.splice(ledArray[i], 1);
                    }
                } else {
                    packet[dest++] = r;
                    packet[dest++] = g;
                    packet[dest++] = b;
                }

            }
        }

		socket.send(packet.buffer);
	}
        
    // Connect to a Fadecandy server running on the same computer, on the default port
    var socket = new WebSocket('ws://127.0.0.1:7890');

    // Put some connection status text in the corner of the screen
    $('#connectionStatus').text('Connecting to fcserver...');
    socket.onclose = function(event) { $('#connectionStatus').text('Not connected to LED server'); }
    socket.onopen = function(event) { $('#connectionStatus').text('Connected to LED server'); }


    var animate = function() {
        setInterval(writeFrame, 60);
    }

    var resetLeds = function() {
        console.log('resetLeds');
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
                console.log(ledArray);
            }
        }
    }

    var ledExists = function(id, arrayToTest) {
        return arrayToTest.some(function(el) {
            return el.id === id;
        }); 
    }

    var bindEvents = function() {

    }

    return {
        init: init,
        writeFrame: writeFrame,
        resetLeds: resetLeds,
        checkLedArray: checkLedArray,
        ledArray: ledArray

    }

})();