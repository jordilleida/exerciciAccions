import Person from './Person';

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
    console.log(jobTitle);
  }

  // Method Overriding
  describe(): string {
    return `${super.describe()}I'm a ${this.jobTitle}.`;
  }
}
const employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());
