export { };
let counter: number;
counter = 1;
// counter = 'Hello';
let counter2: number = 1;
let counter3 = 0;
let name: string = 'John';
let age: number = 25;
let active: boolean = true;

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let person: {
    name: string;
    age: number
};
person = {
    name: name,
    age: age,
}

let greeting: (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};

console.log(greeting(name));

function setCounter(max = 100) {
    counter = max;
}

function increment_without_return_type(counter: number) {
    return counter++;
}

function increment(counter: number): number {
    return counter++;
}

console.log(increment(counter));

let items = [1, 2, 3, null];
let items2 = [0, 1, null, 'Hi'];
let items3 = [new Date(), new RegExp('\d+')];