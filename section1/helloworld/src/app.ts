let message: string = 'Hello, World!';
let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading)

console.log('Hello'.length);
console.log('Hello'.toLocaleUpperCase());
const heading2 = document.querySelector('h1');
// console.log(heading2.getAttribute);
console.log(heading2?.getAttribute);
document.addEventListener('click', function (event) {
    console.log(event.button);
    let input = document.querySelector('input[type="text"]') as HTMLInputElement;
    console.log(input?.value);
    let enteredText = (input as HTMLInputElement).value;
    let input2 = <HTMLInputElement>document.querySelector('input[type="text"]');
    console.log(input2?.value);
})
document.addEventListener('scroll', function (event) {
    // console.log(event.button);
    console.log('scrolled');
})

let list = document.querySelector('#list');
while (list?.firstChild) {
    list.removeChild(list.firstChild);
}

