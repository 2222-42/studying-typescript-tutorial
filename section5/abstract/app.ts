export {};

// An abstract class is typically used to define common behaviors for derived classes to extend
// Abstract classes cannot be instantiated.
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {
    }

    // An Abstract class has at least one abstract method.
    abstract getSalary(): number;
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string{
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

// error TS2511: Cannot create an instance of an abstract class
// let employee = new Employee('John', 'Doe');

// To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.
class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName)
    }
    getSalary(): number {
        return this.salary;
    }
}

class Contractor extends Employee {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName)
    }

    getSalary(): number {
        return this.rate * this.hours;
    }
}

let john = new FullTimeEmployee('John', 'Doe', 12000);
let jane = new Contractor('Jane', 'Doe', 100, 160);

console.log(john.compensationStatement());
console.log(jane.compensationStatement());