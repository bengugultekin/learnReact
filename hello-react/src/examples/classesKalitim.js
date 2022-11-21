// class - ES6
class Person {
    constructor(name = 'Guest', year = 1900) {
        this.name = name;
        this.year = year;
        console.log('constructor çalıştı.')
    }

    calculateAge() {
        return new Date().getFullYear() - this.year;
    }

    greeting(text) {
        return `${text}, My name is ${this.name}. `;
    }
}

class Student extends Person {
    constructor(name, year, studentNumber) {
        super(name, year);
        this.studentNumber = studentNumber;
    }

    study() {
        console.log('I am learning.');
    }

    greeting(text) {
        let str = super.greeting(text);
        str += `My number is ${this.studentNumber}`;
        return str;
    }
}

class Teacher extends Person {
    constructor(name, year, department) {
        super(name, year);
        this.department = department;
    }
    teach() {
        console.log('I am teaching');
    }

    greeting(text) {
        let str = super.greeting(text);
        str += `My department is ${this.department}`;
        return str;
    }
}


// Nesne - object


const p1 = new Student("Bengu", 1998, 160101042);
const p2 = new Teacher("Onur", 1989, "Engineering");
const p3 = new Person();

console.log(p1);
console.log(p2);

console.log(p1.calculateAge());
console.log(p2.calculateAge());
console.log(p3.calculateAge());


console.log(p1.greeting('Hello'));
console.log(p2.greeting('Good morning'));
console.log(p3.greeting('Welcome'));

p1.study();
p2.teach();
