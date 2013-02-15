/*!
Copyright 2013 Hewlett-Packard Development Company, L.P.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


var spi = require('spi');

// SPI ops
var WRITE_CMD = 0x40;
var READ_CMD  = 0x41;

// Configuration ports for Pi-Face
var IODIRA = 0x00;
var IODIRB = 0x01;
var IOCON  = 0x0A;// config
var GPIOA  = 0x12;
var GPIOB  = 0x13;
var GPPUA  = 0x0C; // pullups for A
var GPPUB  = 0x0D;// pullups for B
var OUTPUT_PORT = GPIOA;
var INPUT_PORT  = GPIOB;
var INPUT_PULLUPS = GPPUB;

var PiFace = exports.PiFace = function() {
    this.spi =  new spi.Spi('/dev/spidev0.0', {
                                'mode': spi.MODE['MODE_0'],
                                'chipSelect': spi.CS['none']
                            });
};

PiFace.prototype.init = function() {
    this.spi.open();

};

PiFace.prototype.shutdown = function() {
    this.spi.close();
};

PiFace.prototype.read = function(pinNumber, isPullup) {




};


PiFace.prototype.write = function(pinNumber, newValue, isPullup) {




};
