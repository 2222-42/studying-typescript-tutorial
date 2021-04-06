"use strict";
exports.__esModule = true;
// In practice, you should use a `for` loop if you know how many times the loop should run.
// If you want to stop the loop based on a condition other than the number of times the loop executes, you should use a `while` loop.
for (var i_1 = 0; i_1 < 10; i_1++) {
    console.log(i_1);
}
var i = 0;
for (; i < 10; i++) {
    console.log(i);
}
for (var i_2 = 0;; i_2++) {
    console.log(i_2);
    if (i_2 > 9)
        break;
}
i = 0;
for (;;) {
    console.log(i);
    i++;
    if (i > 9)
        break;
}
