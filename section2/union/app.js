"use strict";
exports.__esModule = true;
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add(1, 2));
console.log(add('Hello,', ' World!'));
// if a: any and b: any, compiled successfully, but cause an error at runtime
// console.log(add(true, false));
var result;
result = 10;
result = 'Hi!';
// Type 'boolean' is not assignable to type 'string | number'.
// result = false;
