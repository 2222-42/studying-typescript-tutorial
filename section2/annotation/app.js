var counter;
counter = 1;
// counter = 'Hello';
var counter2 = 1;
var counter3 = 0;
var _name = 'John';
var age = 25;
var active = true;
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
var person;
person = {
    name: _name,
    age: age
};
var greeting;
greeting = function (name) {
    return "Hi " + name;
};
console.log(greeting(_name));
function setCounter(max) {
    if (max === void 0) { max = 100; }
    counter = max;
}
function increment_without_return_type(counter) {
    return counter++;
}
function increment(counter) {
    return counter++;
}
console.log(increment(counter));
var items = [1, 2, 3, null];
var items2 = [0, 1, null, 'Hi'];
var items3 = [new Date(), new RegExp('\d+')];
