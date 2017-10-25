'use strict';

function Airport(weather) {
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function() {
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('Cannot land due to weather');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeoff = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error('Cannot takeoff due to weather');
  }
  this._hangar = [];
};
