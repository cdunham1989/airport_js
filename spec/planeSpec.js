'use strict';

describe ('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeoff']);
  });

  it('lands plane', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff a plane', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeoff).toHaveBeenCalled();
  });
});
