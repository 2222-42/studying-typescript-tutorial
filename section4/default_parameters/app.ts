export { };

// function applyDiscount(price: number, discount?: number): number
// Optional parameters must come after the required parameters. However, default parameters don’t need to appear after the required parameters.
function applyDiscount(price: number, discount: number = 0.05) {
    return price * (1 - discount);
}

console.log(applyDiscount(100));
console.log(applyDiscount(100, 0.08));

// Notice that you cannot include default parameters in function type definitions.
// error TS2371: A parameter initializer is only allowed in a function or constructor implementation
// let promotion: (price: number, discount: number = 0.05) => number;

// When a default parameter appears before a required parameter, you need to explicitly pass `undefined` to get the default initialized value.
function getDay(year: number = new Date().getFullYear(), month: number): number {
    let day = 0;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            // leap year
            if (((year % 4 == 0) &&
                !(year % 100 == 0))
                || (year % 400 == 0))
                day = 29;
            else
                day = 28;
            break;
        default:
            throw Error('Invalid month');
    }
    return day;
}

let day1 = getDay(2019, 2);
console.log(day1);
// To get the number of days in Feb of the current year, you need to pass undefined to the year parameter like this:
let day2 = getDay(undefined, 2);
console.log(day2);