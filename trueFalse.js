/*
Truthy: 
1. true.
2. any number (+ve, -ve) will be truthy other than 0.
3. any string other than empty string
4. {}
5. []

Falsy
1. false.
2. 0.
3. '' (empty string)
4. undefined
5. null
*/

const x = 4;
if (x) {
    console.log('value of x is truthy');
}
else {
    console.log('value of x is falsy');
}

// optional
// check false:
const y = 0;
if (!y) {
    console.log('value is falsy');
}


// check true:
const z = {};
if (!!z) {
    console.log('value is truthy');
}