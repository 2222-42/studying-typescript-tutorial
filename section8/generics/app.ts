export { };

// The following are benefits of TypeScript generics:
//
// - Leverage type checks at the compile time.
// - Eliminate type castings.
// - Allow you to implement generic algorithms.

function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));

function getRandomStringElement(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let colors = ['red', 'green', 'blue'];
console.log(getRandomStringElement(colors));

function getRandomAnyElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

console.log(getRandomAnyElement(numbers));
console.log(getRandomAnyElement(colors));

// This function uses type variable `T`. 
// The `T` allows you to capture the type that is provided at the time of calling the function. 
// Also, the function uses the `T` type variable as its return type.
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

console.log(getRandomElement(numbers));
console.log(getRandomElement(colors));
let randomEle = getRandomElement<number>(numbers);
console.log(randomEle);
// error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string[]'.
// let randomEleStrNumber = getRandomElement<string>(numbers);
let randomEleStr: string;
// error TS2322: Type 'number' is not assignable to type 'string'.
// randomEleStr = getRandomElement(numbers);


// Use `extends` keyword to constrain the type parameter to a specific type.

// Generic functions with multiple types
// function merge<U, V>(obj1: U, obj2: V): U & V
// In order to denote the constraint, you use the `extends` keyword. 
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

let person = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(person);

// error TS2345: Argument of type 'number' is not assignable to parameter of type 'object'.
// let person2 = merge(
//     { name: 'John' },
//     25
// );
// console.log(person2); // { name: 'John' }


// Use `extends keyof` to constrain a type that is the property of another object.

// Type 'K' cannot be used to index type 'T'.
// Add a constraint to `K` to ensure that it is a key of `T` as follows
function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let str = prop({ name: 'John' }, 'name');
console.log(str);

// error TS2345: Argument of type '"age"' is not assignable to parameter of type '"name"'
// let age = prop({ name: 'John' }, 'age');
// console.log(age);