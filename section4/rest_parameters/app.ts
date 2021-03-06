export { };

// A rest parameter allows you a function to accept zero or more arguments of the specified type

// In TypeScript, rest parameters follow these rules:
// - A function has only one rest parameter.
// - The rest parameter appears last in the parameter list.
// - The type of the rest parameter is an array type.

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal());
console.log(getTotal(10, 20));
console.log(getTotal(10, 20, 30));

function getAverage(divsor: number = 1, ...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total / divsor;
}

console.log(getAverage());
console.log(getAverage(2, 10, 20));
console.log(getAverage(3, 10, 20, 30));