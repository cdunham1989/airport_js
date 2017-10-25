'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([])
  });

  describe('under normal weather conditions', function() {

    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
    });

    it('can clear planes for landing', function() {
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for takeoff', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeoff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy weather conditions', function() {

    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });

    it('does not allow plane to land', function() {
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('Cannot land due to weather');
    });

    it('does not allow plane to takeoff', function() {
      expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('Cannot takeoff due to weather');
    });
  });
});
