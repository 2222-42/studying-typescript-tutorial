export { };

// When you do not annotate the return type, TypeScript will try to infer an appropriate type.
// If a function has different branches that return different types, the TypeScript compiler may infer the union type or any type.
function add(a: number, b: number): number {
    return a + b;
}

// Argument of type 'string' is not assignable to parameter of type 'number'.
// let sum = add('10', '20');

function echo(message: string): void {
    console.log(message.toUpperCase());
}

echo('test');