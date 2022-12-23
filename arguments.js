function sum(a, b, c) {
    // array like of object
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45, 89, 12, 14, 78, 54);
// console.log(total);

console.log(sum.length);