const data = undefined;
if (!data) {
    // console.log('value is false');
}
else {
    // console.log('value is true');
}

let p = 'Javascript';
let q = p;
p = 'React';
// console.log(q);

const isTrue = 'false';
if (!isTrue) {
    // console.log('hello');
} else {
    // console.log('world');
}

function sum(p, q) {
    p + q;
}
const result = sum(2, 3);
// console.log(result);

if ("2" === 2) {
    // console.log("Inside if");
} else {
    // console.log("Inside else");
}

function work(x, y = 4) {
    return x + y;
}
// console.log(work(32));

// practiceProblem: 1.1
if ([] == true) {
    // console.log('result is true');
}
else {
    // console.log('result is false');
}

// practiceProblem: 1.2
if (true === 'true') {
    // console.log('The value is true');
}
else {
    // console.log('The value is false');
}

// practiceProblem: 1.3
const check = (parameter) => {
    if (isNaN(parameter)) {
        return false;
    }
    else {
        return true;
    }
}

// console.log(check('Al Amin Miah'));

// practiceProblem: 2
let storeFalsyValue = true;
if (!storeFalsyValue) {
    // console.log(`Nothing to show!`);
}
else {
    // console.log(`You are amazing!`);
}

// practiceproblem: 3
const threeParameter = (num1, num2, String) => {
    if (String === 'add') {
        return num1 + num2;
    }
    else if (String === 'subtract') {
        return num1 - num2;
    }
    else if (String === 'multiply') {
        return num1 * num2;
    }
    else if (String === 'devide') {
        return num1 / num2;
    }
    else if (String === 'modulus') {
        return num1 % num2;
    }
    else {
        return 'invalid operation';
    }
}

// console.log(threeParameter(90, 78, 'modulus'));