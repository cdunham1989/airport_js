'use strict';

describe('Feature test: ', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });


  describe('under normal conditions',function(){
      beforeEach(function(){
        spyOn(Math,'random').and.returnValue(0);
      });

      it('can land a plane at the airport', function() {
        plane.land(airport);
        expect(airport.planes()).toContain(plane);
      });

      it('can takeoff a plane from the airport', function() {
        plane.land(airport);
        plane.takeoff();
        expect(airport.planes()).not.toContain(plane);
      });
    });

  describe('under stormy conditions',function(){

    it('blocks takeoff when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(0);
      plane.land(airport)
      spyOn(airport._weather,'isStormy').and.returnValue(true);
      expect(function() { plane.takeoff(); }).toThrowError('Cannot takeoff due to weather');
      expect(airport.planes()).toContain(plane);
    });

    it('blocks landing when weather is stormy', function(){
      spyOn(Math,'random').and.returnValue(1);
      expect(function(){ plane.land(airport); }).toThrowError('Cannot land due to weather');
      expect(airport.planes()).toEqual([]);
    });
  });
});
