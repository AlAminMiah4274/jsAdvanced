// strongly/static typed language:
/*
1. int a = 5;
2. string b = 'Alim';
3. bool c = true;
4. object student = { name: 'noya dhaman', id: 55};
5. int[] numbers = [45, 85, 87];
6. string[] friends = ['sabbir', 'masum', 'shafim'];
*/

// dynamically typed language:

// primitive type
const a = 5;
const b = 'Samsu kopay na ekhon ar';
const d = true;


// non-primitive type
const ages = [12, 78, 51, 15];
const student = { id: 23, class: 7 };

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
// console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'Web Developer' };
let q = p;
// console.log(p, q);
q.job = 'Front End Developer';
// console.log(p, q);

let e = { class: 'Twelve' };
let f = { class: 'Eleven' };

console.log(e, f);