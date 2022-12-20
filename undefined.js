/*
8 ways to get undefined: 
1. varibale that is not initialized.
2. function with no return.
3. parameter that is not passed.
4. if return has nothing on the right side.
5. property that doesn't exist on an object.
6. accessing array elements outside of the index range.
7. deleting an element inside an array.
8. set a value directly to undefined.
*/

// one:
let first;

// two:
function second(a, b) {
    const total = a + b;
}
const result = second();

// three:
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

// third(5, 2);

// console.log(result);

// four:
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
const total = noNegative(2, -5);
// console.log(total);

// five:
const fifth = { name: 'panchom', age: 40 };
// console.log(fifth.age, fifth.salary);

// six:
const sixth = [78, 45, 15, 1, 8, 4, 5];
// console.log(sixth[4], sixth[1], sixth[57]);

// seven:
// you should not do it. Instead use splice.
delete sixth[3];
// console.log(sixth);

// eight:
const eighth = undefined;
// console.log(eighth);

// example of using null instead of undefined
const noData = null;

const data = { results: [], updated: null };
// console.log(data);

console.log(typeof undefined);
console.log(typeof null);