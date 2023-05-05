// Creating function

// New "New" keyword

const person = new Object();

person.firstName = "First Name";
person.secondName = "Second Name";

// console.log(person);

// Creating function

function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}

const personOne = new Person("John", "Dou");
const personTwo = new Person("Sam", "Brown");
const personThree = new Person("Alice", "Smith");

console.log(new Person());
