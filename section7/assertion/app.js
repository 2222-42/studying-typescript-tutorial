"use strict";
exports.__esModule = true;
function getNetPrice(price, discount, format) {
    var netPrice = price * (1 - discount);
    return format ? "$" + netPrice : netPrice;
}
// a type assertion does not carry any type casting.
// only tells the compiler which type it should apply to a value for the type checking purposes.
var netPrice = getNetPrice(100, 0.05, true);
console.log(netPrice);
var netPrice2 = getNetPrice(100, 0.05, false);
console.log(netPrice2);
var netPrice3 = getNetPrice(100, 0.05, false);
console.log(netPrice3);
var netPrice4 = getNetPrice(100, 0.05, false);
console.log(netPrice4);
