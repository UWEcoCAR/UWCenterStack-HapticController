// Code out here will run when the module is loaded (see line 1 of test.js)
var SerialPort = require('serialport').SerialPort;

module.exports = function(port) {
	// Code in here will run when a new class instance is created (see line 3 of test.js)

	this.portOpen = false;

	this.serialPort = new SerialPort(port, {baudrate: 9600}, function(error) { // RYAN: MAKE THIS THE CORRECT BAUDRATE
		
		// this function is called when the serial port is opened
		if (error) {
			console.error(error);
		} else {
			this.portOpen = true;
		}
	});

	// Allow us to check if the port is open yet
	this.isPortOpen = function() {
		return this.portOpen;
	} 	

	// Add your public functions here
	
	this.mainPulse = function() {
		if (this.portOpen) {
			console.log('mainPulse');
			//this.serialPort.write('mf10c100p');
			this.serialport.write('e');
		}
	}

	this.someFunction2 = function() {
		if (this.portOpen) {
			console.log('someFunction2');
			this.serialPort.write('e');
		}
	}

}