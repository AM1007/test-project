// Creating function

// New

const person = new Object();

person.firstName = "First Name";
person.secondName = "Second Name";

console.log(person);

function Test(first, second) {
  this.prop1 = first;
  this.prop2 = second;
}

console.log(Test());
