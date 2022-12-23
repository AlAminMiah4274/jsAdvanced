function greeting(person, name) {
    person(name);
}

const name = 'Al Amin Miah';
const number = 21;
const numbers = [45, 84, 21];
const person = { name: 'Al Amin Miah', height: 5.5, color: 'White' };
const isWhite = true;

function greetingHandler(name) {
    console.log('Good Morning', name);
}

function greetEvening(name) {
    console.log('Good Evening', name);
}

function greetNight(name) {
    console.log('Good Night', name);
}

greeting(greetingHandler, 'Tom Braddy');
greeting(greetEvening, 'Tom Cruise');
greeting(greetNight, 'Tom Hanse');