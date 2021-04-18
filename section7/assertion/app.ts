export { };

function getNetPrice(price: number, discount: number, format: boolean): number | string {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}

// Type assertions instruct the compiler to treat a value as a specified type.

// Type assertions do not carry any type conversion, 
// only tells the compiler which type it should apply to a value for the type checking purposes.

let netPrice = getNetPrice(100, 0.05, true) as string;
console.log(netPrice);

let netPrice2 = getNetPrice(100, 0.05, false) as number;
console.log(netPrice2);

let netPrice3 = getNetPrice(100, 0.05, false) as string;
console.log(netPrice3);

let netPrice4 = <number>getNetPrice(100, 0.05, false)
console.log(netPrice4);