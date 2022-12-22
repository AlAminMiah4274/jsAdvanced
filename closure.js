function init() {
    const name = 'Mozilla'; // name is a local variable created by init
    function displayName() {
        // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
// init(); 

function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());