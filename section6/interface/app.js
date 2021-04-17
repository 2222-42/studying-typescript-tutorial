"use strict";
exports.__esModule = true;
function getFullName(person) {
    if (person.firstName) {
        return person.firstName + " " + person.middleName + " " + person.lastName;
    }
    return person.firstName + " " + person.lastName;
}
var person;
person = {
    ssn: '171-28-0916',
    firstName: 'John',
    lastName: 'Doe'
};
// error TS2540: Cannot assign to 'ssn' because it is a read-only property.
// person.ssn = '171-28-0000';
console.log(getFullName(person));
var jane = {
    ssn: '171-28-0917',
    firstName: 'Jane',
    middleName: 'K',
    lastName: 'Doe',
    age: 22
};
console.log(getFullName(jane));
jane.ssn = '171-28-0000';
var format;
// the parameter names don’t need to match the function signature
format = function (src, upper) {
    return upper ? src.toLocaleUpperCase() : src.toLocaleUpperCase();
};
console.log(format('hi', true));
var lowerCase;
lowerCase = function (str) {
    return str.toLowerCase();
};
console.log(lowerCase('Hi', false));
console.log(lowerCase('Hi', true));
var Persona = /** @class */ (function () {
    function Persona(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Persona.prototype.toJSON = function () {
        return JSON.stringify(this);
    };
    return Persona;
}());
var persona = new Persona('John', 'Doe');
console.log(persona.toJSON());
