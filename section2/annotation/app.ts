let counter: number;
counter = 1;
// counter = 'Hello';
let counter2: number = 1;
let _name: string = 'John';
let age: number = 25;
let active: boolean = true;

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let person: {
    name: string;
    age: number
};
person = {
    name: _name,
    age: age,
}

let greeting: (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};

greeting(_name);