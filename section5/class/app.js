"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// The `private` modifier allows access within the same class.
// The `protected` modifier allows access within the same class and subclasses.
// The `public` modifier allows access from any location.
var Person = /** @class */ (function () {
    // To make the code shorter, TypeScript allows you to both declare properties and initialize them in the constructor
    // protected ssn;
    // private firstName;
    // private lastName;
    // The `readonly` access modifier to mark a class property as immutable.
    // , just like `const` (const is for variables)
    // The readonly property must be initialized as a part of the declaration or in the constructor of the same class.
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
    Person.prototype.describe = function () {
        return "This is " + this.firstName + " " + this.lastName + ".";
    };
    return Person;
}());
// Use the `extends` keyword to allow a class to inherit from another class.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(ssn, firstName, lastName, birthDate, jobTitle) {
        var _this = _super.call(this, ssn, firstName, lastName, birthDate) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    // override
    Employee.prototype.describe = function () {
        // using the syntax super.methodInParentClass().
        return _super.prototype.describe.call(this) + ("I'm a " + this.jobTitle + ".");
    };
    return Employee;
}(Person));
var person = new Person('171-28-0926', 'John', 'Doe', new Date(1991, 6, 17));
console.log(person.getFullName());
console.log(person.describe());
// error TS2341: Property 'ssn' is private and only accessible within class 'Person'.
// console.log(person.ssn);
// error TS2540: Cannot assign to 'birthDate' because it is a read-only property.
// person.birthDate = new Date(1992, 6, 18);
var employee = new Employee('171-28-0926', 'John', 'Doe', new Date(1991, 6, 17), 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
