export { };
// Use the parameter?: type syntax to make a parameter optional.
// NOTE: The optional parameters must appear after the required parameters in the parameter list.
// A required parameter cannot follow an optional parameter.
function multiply(a: number, b: number, c?: number): number {
    // Use the expression `typeof(parameter) !== 'undefined'` to check if the parameter has ben initialized.
    // if you use the expression `if(c)` to check if an argument is not initialized, you would find that empty string or zero would be treated as undefined
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}

let result1 = multiply(1, 2, 3);
console.log(result1);
let result2 = multiply(1, 2);
console.log(result2);