export { };
let employee: object;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employee);

// Type 'string' is not assignable to type 'object'.
// employee = "Jane";

// Property 'hireDate' does not exist on type 'object'.
// console.log(employee.hireDate);

let employeeObject1: {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
};
employeeObject1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
console.log(employeeObject1);

let employeeObject2: {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};
employeeObject2.firstName = 'John2'
console.log(employeeObject2);

// The `object` type represents all non-primitive values 
// while the `Object` type describes the functionality of all objects.

//  Property 'firstName' does not exist on type '{}'.
// let vacant: {};
// vacant.firstName = 'John';

let vacant: {} = {};
console.log(vacant.toString());