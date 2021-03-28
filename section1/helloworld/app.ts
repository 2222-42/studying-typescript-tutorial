let message: string = 'Hello, World!';
let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading)

console.log('Hello'.length);
console.log('Hello'.toLocaleUpperCase()); 
const heading2 = document.querySelector('h1');
// console.log(heading2.getAttribute);
console.log(heading2?.getAttribute);
