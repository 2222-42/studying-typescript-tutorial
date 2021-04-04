export { };

function raiseError(message: string): never {
    throw new Error(message);
}

function reject() {
    return raiseError('Rejected');
}

let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}
// loop();

function fn(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    }

    return neverOccur();
}

let neverOccur = () => {
    throw new Error('Never!');
}

console.log(fn("string"));
console.log(fn(10));
const json = `{"latitude": 10.11, "longitude":12.12}`;
const currentLocation = JSON.parse(json);
console.log(fn(currentLocation));