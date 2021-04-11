export { };

let add: (x: number, y: number) => number;
add = function (x: number, y: number) {
    return x + y;
}

let another_add: (x: number, y: number) => number =
    function (x: number, y: number) {
        return x + y;
    };
console.log(add(2, 3));
console.log(another_add(2, 3));

// Type '(x: string, y: string) => number' is not assignable to type '(x: number, y: number) => number'.
// Types of parameters 'x' and 'x' are incompatible.
//   Type 'number' is not assignable to type 'string'.
// add = function (x: string, y: string): number {
//     return x.concat(y).length;
// }