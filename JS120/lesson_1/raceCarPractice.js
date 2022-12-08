function createCar(makeIn, fuelLevelIn, engineOnIn) {
  return {
  make: makeIn,
  fuelLevel: fuelLevelIn,
  engineOn: engineOnIn,

  startEngine: function() {
    raceCar.engineOn = true;
  },

  drive: function() {
    raceCar.fuelLevel -= 0.1;
  },

  stopEngine: function() {
    raceCar.engineOn = false;
  },

  refuel: function(percent) {
    if ((raceCar.fuelLevel + (percent / 100)) <= 1) {
      raceCar.fuelLevel += (percent / 100);
    } else {
      raceCar.fuelLevel = 1;
    }
  },
};
}

let firstCar = createCar('BMW', 1, true);

console.log(firstCar);
