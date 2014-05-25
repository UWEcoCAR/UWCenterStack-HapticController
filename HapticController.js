// Code out here will run when the module is loaded (see line 1 of test.js)
var SerialPort = require('serialPort').SerialPort;

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
	
	//this function sets up the frequency and pulse time for all three buzzers
	this.setUp = function(){
		if(this.portOpen || true){
			this.serialPort.write('mf35.c5.lf35.c5.rf35.c5.');
			return true;
		} else {
			return false;
		}
	}

	//sends a pulse command to the right motor
	this.rightPulse = function(){
		if(this.portOpen || true){
			this.serialPort.write('rp');
			return true;
		} else {
			return false;
		}
	}

	//sends a pulse command to the left buzzer
	this.leftPulse = function(){
		if(this.portOpen || true){
			this.serialPort.write('lp');
			return true;
		} else {
			return false;
		}
	}

	//sends a pulse command to the main buzzer
	this.mainPulse = function(){
		if(this.portOpen || true){
			this.serialPort.write('mplprp');
			return true;
		} else {
			return false;
		}
	}

	//sends a enable command to the left buzzer
	//will remain on untill leftDisable or
	//leftPulse (turns off after the pulse duration)
	this.leftEnable = function(){
		if(this.portOpen || true){
			this.serialPort.write('le');
			return true;
		} else {
			return false;
		}
	}

	//sends a enable command to the right buzzer
	//will remain on untill rightDisable or
	//rightPulse (turns off after the pulse duration)
	this.rightEnable = function(){
		if(this.portOpen || true){
			this.serialPort.write('re');
			return true;
		} else {
			return false;
		}
	}

	//sends a enable command to the main buzzer
	//will remain on untill mainDisable or
	//mainPulse (turns off after the pulse duration)
	this.mainEnable = function(){
		if(this.portOpen || true){
			this.serialPort.write('melere');
			return true;
		} else {
			return false;
		}
	}

	//sends a disable command to the right buzzer
	//turns off both a pulse and enable command
	this.rightDisable = function(){
		if(this.portOpen || true){
			this.serialPort.write('rd');
			return true;
		} else {
			return false;
		}
	}

	//sends a disable command to the left buzzer
	//turns off both a pulse and enable command
	this.leftDisable = function(){
		if(this.portOpen || true){
			this.serialPort.write('ld');
			return true;
		} else {
			return false;
		}
	}

	//sends a disable command to the main buzzer
	//turns off both a pulse and enable command
	this.mainDisable = function(){
		if(this.portOpen || true){
			this.serialPort.write('mdldrd');
			return true;
		} else {
			return false;
		}
	}
}