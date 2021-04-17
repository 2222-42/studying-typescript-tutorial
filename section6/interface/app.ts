export {};

interface Person{
    readonly ssn: string;
    firstName: string;
    middleName?: string;
    lastName: string
}

function getFullName(person: Person) {
    if (person.firstName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

let person: Person
person = {
    ssn: '171-28-0916',
    firstName: 'John',
    lastName: 'Doe'
};
// error TS2540: Cannot assign to 'ssn' because it is a read-only property.
// person.ssn = '171-28-0000';
console.log(getFullName(person));


let jane = {
    ssn: '171-28-0917',
    firstName: 'Jane',
    middleName: 'K',
    lastName: 'Doe',
    age: 22,
};
console.log(getFullName(jane));
jane.ssn = '171-28-0000';