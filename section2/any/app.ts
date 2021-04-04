export { };

const json = `{"latitude": 10.11, "longitude":12.12}`;

const currentLocation = JSON.parse(json);
console.log(currentLocation);
console.log(currentLocation.x);

let result;
result = 10.123;
console.log(result.toFixed());
// result.willExist();

// let result2: object;
// result2 = 10.123;
// result2.toFixed();