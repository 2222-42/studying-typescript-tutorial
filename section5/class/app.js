"use strict";
exports.__esModule = true;
// The `private` modifier allows access within the same class.
// The `protected` modifier allows access within the same class and subclasses.
// The `public` modifier allows access from any location.
var Person = /** @class */ (function () {
    // To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor
    // protected ssn;
    // private firstName;
    // private lastName;

    // readonly birthDate: Date;
    function Person(ssn, firstName, lastName, birthDate) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }
    // the `getFullName()` method of the `Person` class has the `public` modifier. 
    // The following explicitly adds the public modifier to the `getFullName()` method:
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var person = new Person('171-28-0926', 'John', 'Doe', new Date(1991, 6, 17));
console.log(person.getFullName());
// error TS2341: Property 'ssn' is private and only accessible within class 'Person'.
// console.log(person.ssn);
person.birthDate = new Date(1992, 6, 18);
