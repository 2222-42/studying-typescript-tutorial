export { };

// The `private` modifier allows access within the same class.
// The `protected` modifier allows access within the same class and subclasses.
// The `public` modifier allows access from any location.

class Person {
    // To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor
    // protected ssn;
    // private firstName;
    // private lastName;

    constructor(protected ssn: string, private firstName: string, private lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // the `getFullName()` method of the `Person` class has the `public` modifier. 
    // The following explicitly adds the public modifier to the `getFullName()` method:
    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('171-28-0926', 'John', 'Doe');
console.log(person.getFullName());
// error TS2341: Property 'ssn' is private and only accessible within class 'Person'.
// console.log(person.ssn);