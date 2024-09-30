class Person {
    constructor(fname, lname, dob) {
        this.firstname = fname;
        this.lastname = lname;
        this.DOB = new Date(dob);
    }

    getBirthyear() {
        return this.DOB.getFullYear();
    }
}

const person1 = new Person('john', 'wick', '4-3-91');

console.log(person1);
console.log(person1.getBirthyear());


