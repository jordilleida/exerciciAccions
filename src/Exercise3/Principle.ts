import ElectricCar from './ElectricCar';
import GasCar from './Gascar';

const electricCar = new ElectricCar();
electricCar
  .Rent('Electric car') // Electric car has been rented.
  .Record() // logs current date and time.
  .Charge(); // Electric car has been charged.

const gasCar = new GasCar();
gasCar
  .Return('Gas car')
  .Record()
  .Refill();
