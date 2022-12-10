// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// object oriented way of creating an object
// blueprint of an object
class Car_Class {
  private typeOfEngine: string;
  private brakes: string;
  private wheelsCountIncludingStephinie: number;
  private customHorn: boolean;

  constructor(typeofEngine, brakes, wheelsCountIncludingStephinie, customHorn) {
    this.typeOfEngine = typeofEngine;
    this.brakes = brakes;
    this.wheelsCountIncludingStephinie = wheelsCountIncludingStephinie;
    customHorn = customHorn;
  }
}

let marauthi_Cars = new Car_Class('4 stroke', 'normal', 4, true);
let bmw_cars = new Car_Class('4 stroke', 'abs', 5, false);

let car_Object = {
  typeOfEngine: '4 stroke',
  brakes: 'abs',
  wheelsCountIncludingStephinie: 5,
  customHorn: false,
};

// inheritance
// base class

interface ICar {
  brakes: string;
  capacity: number;
}
class Car implements ICar {
  // access modifiers
  private _typeOfEngine: string;
  brakes: string;
  capacity: number;
  fuelType: string;
  constructor(brakes, capacity) {
    this.brakes = brakes;
    this.capacity = capacity;
  }
  // using this method as polymorphism
  declareFuelType(fuelType: string) {
    this.fuelType = fuelType;
    this.engine = this.fuelType;
  }
  // encaplsulating _typeOfEngine
  public get engine(): string {
    return this._typeOfEngine;
  }

  private set engine(value: string) {
    if (value === 'diesel' || value === 'petrol' || value === 'cng') {
      this._typeOfEngine = '4 stroke';
    }
    if (value === 'electricity') {
      this._typeOfEngine = 'brushless motors';
    }
  }
}
// child class
// parent for HighEndCars would be Car Class
class HighEndCars extends Car {
  public accidentalProtection = 4;
  constructor(brakes, capacity) {
    super(brakes, capacity);
  }

  declareFuelType() {
    this.fuelType = 'electricity';
  }
}

class LowEndCars extends Car {
  public accidentalProtection = 2;

  constructor(brakes, capacity) {
    super(brakes, capacity);
  }
}

let bmw = new HighEndCars('abs', 4);
bmw.declareFuelType();

let maruthi = new LowEndCars('normal', 4);
maruthi.declareFuelType('cng');

console.log(bmw);
console.log(maruthi);
