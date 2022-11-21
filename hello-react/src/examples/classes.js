// class - ES5
var PersonES5 = function() {

}

// class - ES6
class PersonES6 {
    constructor(name = 'Guest', year = 1900) {
        this.name = name;
        this.year = year;
        console.log('constructor çalıştı.')
    }

    calculateAge() {
        return new Date().getFullYear() - this.year;
    }

    greeting(text) {
        return `${text}, My name is ${this.name}`;
    }
}

// Nesne - object

const pES5 = new PersonES5();

console.log(pES5);

const pES61 = new PersonES6("Bengu", 1998);
const pES62 = new PersonES6("Onur", 1989);
const pES63 = new PersonES6();

console.log(pES61);
console.log(pES62);

console.log(pES61.calculateAge());
console.log(pES62.calculateAge());
console.log(pES63.calculateAge());


console.log(pES61.greeting('Hello'));
console.log(pES62.greeting('Good morning'));
console.log(pES63.greeting('Welcome'));


