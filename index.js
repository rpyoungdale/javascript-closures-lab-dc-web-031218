const app = "I don't do much."

const bumpCounter = function () {
  let counter = 0;

  return {
    addBump: function () {
      return counter+=1;
    },

    getBumps: function () {
      return counter;
    }
  };
};

const createAnimal = function (animalType) {
  return function(deadlyDevice) {
    return {
      animalType: animalType,
      deadlyDevice: deadlyDevice
    }
  }
};

const sharkCreator = createAnimal("Shark");
const sharkWithFrickinLaserbeam = sharkCreator("Laserbeam");
const sharkWithFrickinCannon = sharkCreator("Cannon");
