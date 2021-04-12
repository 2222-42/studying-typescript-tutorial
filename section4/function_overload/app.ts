export { };

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

let result1 = add(10, 20);
console.log(result1);
let result2 = add('Hello, ', 'World!');
console.log(result2);

function sum(a: number, b: number): number;
function sum(a: number, b: number, c: number): number;
function sum(a: number, b: number, c?: number): number {
    if (c) return a + b + c;
    return a + b;
}

console.log(sum(10, 20));
console.log(sum(10, 20, 30));

class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values = [];
            for (let start = this.current; start < target; start++) {
                values.push(start);
            }
            this.current = target;
            return values;
        }
        return ++this.current
    }
}

let counter = new Counter();
console.log(counter.count());
console.log(counter.count(20));