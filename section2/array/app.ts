export { };
let skills: string[];
skills = ['Problem Sovling', 'Software Design', 'Programming'];
skills[0] = "Problem Solving2";
skills.push("Problem Solving");
console.log(skills);
// skills.push(100);
let skill = skills[0];
console.log(typeof (skill));

let series = [1, 2, 3];
console.log(series.length);
let doubleInt = series.map(e => e * 2);
console.log(doubleInt);

let scores = ['Programming', 5, 'Software Design', 4];

let scores2: (string | number)[];
scores2 = ['Programming', 5, 'Software Design'];
scores2.push(4);
