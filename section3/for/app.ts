export { };

// In practice, you should use a `for` loop if you know how many times the loop should run.
// If you want to stop the loop based on a condition other than the number of times the loop executes, you should use a `while` loop.

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0
for (; i < 10; i++) {
    console.log(i);
}

for (let i = 0; ; i++) {
    console.log(i);
    if (i > 9) break;
}

i = 0
for (; ;) {
    console.log(i);
    i++;
    if (i > 9) break;
}