// You can use this file for testing your controller.
// The code Vinod and I will write will look something like this code

var HapticController = require('./HapticController');

var hapticController = new HapticController('SERIAL_PORT_OF_THE_ARDUINO'); // RYAN: PUT THE CORRECT SERIAL PORT HERE

// In typical JavaScript, we would use a callback function or events to notify us that
// the the connection is ready, but we will keep it super simple for you and just wait

// wait 2000 ms for the connection to open
setTimeout(function() {

	// try writing
	hapticController.someFunction1();

	// wait 1000 ms before calling another function
	setTimeout(function() {
		hapticController.someFunction2();
	}, 1000);

}, 2000);