"use strict";
const Hue = require('./hue.js');

var connections = [];

const net = require('net');

net.createServer(function(socket) {
    socket.setEncoding('utf8');

    console.log("user connected");

    socket.on('data', function(buffer) {
        console.log("received data", buffer);
        
        var command = buffer.toString().trim().split(" ");
        switch(command[0]) {
            case 'HELP':
                socket.write("Commands are: HELP, ON, OFF" + "\r\n");
                break;

            case 'OFF':
                var hue = new Hue();
                hue.lightsOff();
                break;

            case 'ON':
                var hue = new Hue();
                hue.lightsOn();
                break;

            default:
                console.log("command not implemented");
                break;
        }
    });

    socket.on('close', function() {
        console.log("user disconnected");

    });
}).listen(8001);

console.log("palvelin on nyt käynnistetty");
console.log("saat palvelimeen yhteyden telnetillä 'telnet localhost 8001'");