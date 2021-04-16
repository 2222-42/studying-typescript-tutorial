export { };

// The `private` modifier allows access within the same class.
// The `protected` modifier allows access within the same class and subclasses.
// The `public` modifier allows access from any location.

class Person {
    // To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor
    // protected ssn;
    // private firstName;
    // private lastName;

    // The `readonly` access modifier to mark a class property as immutable.
    // , just like `const` (const is for variables)
    // The readonly property must be initialized as a part of the declaration or in the constructor of the same class.
    // readonly birthDate: Date;

    constructor(protected ssn: string, private firstName: string, private lastName: string, readonly birthDate: Date) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    // the `getFullName()` method of the `Person` class has the `public` modifier. 
    // The following explicitly adds the public modifier to the `getFullName()` method:
    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

// Use the `extends` keyword to allow a class to inherit from another class.
class Employee extends Person {
    constructor(ssn: string, firstName: string, lastName: string, birthDate: Date, private jobTitle: string) {
        super(ssn, firstName, lastName, birthDate);
    }

    // override
    describe(): string {
        // using the syntax super.methodInParentClass().
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}

let person = new Person('171-28-0926', 'John', 'Doe', new Date(1991, 6, 17));
console.log(person.getFullName());
console.log(person.describe());
// error TS2341: Property 'ssn' is private and only accessible within class 'Person'.
// console.log(person.ssn);

// error TS2540: Cannot assign to 'birthDate' because it is a read-only property.
// person.birthDate = new Date(1992, 6, 18);

let employee = new Employee('171-28-0926', 'John', 'Doe', new Date(1991, 6, 17), 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());