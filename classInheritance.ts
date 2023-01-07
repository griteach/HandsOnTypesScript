class Vehicle {
  constructor(private wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount} miles`);
  }
}

class MotorCycle extends Vehicle {
  constructor() {
    super(2);
  }
}
class AutoMobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new MotorCycle();
motorCycle.showNumberOfWheels();
const autoMobile = new AutoMobile();
autoMobile.showNumberOfWheels();
