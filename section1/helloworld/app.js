var message = 'Hello, World!';
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
console.log('Hello'.length);
console.log('Hello'.toLocaleUpperCase());
var heading2 = document.querySelector('h1');
// console.log(heading2.getAttribute);
console.log(heading2 === null || heading2 === void 0 ? void 0 : heading2.getAttribute);
