const axios = require('axios');

const api_key = '' // oma api key
//const server_addr = 'http:'
//const server_addr = 'http:' // 
const server_addr = 'http://' // remote serveri


const lights = ['1', '2', '3', '4', '5', '6'];

class HueHue {

  constructor() {
    console.log("HueHue created");
  }

  randomColor () {
    let bri = 1+Math.floor(Math.random()*254);
    let ct = 153+Math.floor(Math.random()*347);
    this._setLights(true, bri, ct);
  }

  lightsOn() {
    this._setLights(true, 50, 250);
  }

  lightsOff() {
    this._setLights(true, 1, 250);
  }

  _setLights(state, brightness, colortemp) {
    console.log("state:", state);
    if(typeof state !== 'boolean') {
      console.log("invalid state value (" + state + ") defaulting to true");
      state = true;
    }

    if(brightness < 1 || brightness > 254) {
      console.log("brightness over limits 1-254: defaulting to 50");
      brightness = 50;
    }

    if(colortemp < 153 ||colortemp > 500) {
      console.log("brightness over limits 153-500: defaulting to 250");
      brightness = 250;
    }

    lights.forEach(light => {
      axios.put(server_addr + '/api/' + api_key + '/lights/' + light + '/state', 
      { 
        "on": state,   // true / false
        "bri": brightness,   // 1 - 254
        "ct": colortemp,  // 153 - 500
      })
      .then(function (response) {
      console.log(response.data);
      })
      .catch(function (error) {
      console.log(error);
      });
    });
  }
};

//let hue = new HueHue();
//hue.lightsOn();
module.exports = HueHue;
