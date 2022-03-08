import Car from './Car';

export default class ElectricCar extends Car {
  Charge() : this {
    console.log('Electric car has been charged');
    return this;
  }
}
