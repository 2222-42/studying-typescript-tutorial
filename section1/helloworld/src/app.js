var message = 'Hello, World!';
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
console.log('Hello'.length);
console.log('Hello'.toLocaleUpperCase());
var heading2 = document.querySelector('h1');
// console.log(heading2.getAttribute);
console.log(heading2 === null || heading2 === void 0 ? void 0 : heading2.getAttribute);
document.addEventListener('click', function (event) {
    console.log(event.button);
    var input = document.querySelector('input[type="text"]');
    console.log(input === null || input === void 0 ? void 0 : input.value);
    var enteredText = input.value;
    var input2 = document.querySelector('input[type="text"]');
    console.log(input2 === null || input2 === void 0 ? void 0 : input2.value);
});
document.addEventListener('scroll', function (event) {
    // console.log(event.button);
    console.log('scrolled');
});
var list = document.querySelector('#list');
while (list === null || list === void 0 ? void 0 : list.firstChild) {
    list.removeChild(list.firstChild);
}
