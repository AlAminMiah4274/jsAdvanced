// print5();
print10();
// console.log(print10());

for (let i = 0; i < 5; i++) {
    // console.log(i);
}
// console.log('Outside:', i)

function print5() {
    console.log('inside:', 5);
}

var print10 = function () {
    console.log('inside:', 10);
}

// print10();