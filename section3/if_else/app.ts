export { };

const max = 100;
// let counter = 0;
let counter = 100;

if (counter < max) {
    counter++;
} else {
    counter = 1;
}

console.log(counter);

// ternary operator ?:
counter = 100;

counter < max ? counter++ : counter = 1;
console.log(counter);

let discount: number;
let itemCount = 11;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10;
} else if (itemCount > 10) {
    discount = 15;
} else {
    throw new Error('The number of items cannnot be negative!')
}

console.log(`You got ${discount}% discount.`);