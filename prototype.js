// All JavaScript objects inherit properties and methods from a prototype.
/**
 * All JavaScript objects inherit properties and methods from a prototype:

Date objects inherit from Date.prototype
Array objects inherit from Array.prototype
Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype.


 */

// you can not add a new property to an existing object constructor:
/**
 * Adding Properties and Methods to Objects
Sometimes you want to add new properties (or methods) to all existing objects of a given type.

Sometimes you want to add new properties (or methods) to an object constructor.

Using the prototype Property
The JavaScript prototype property allows you to add new properties to object constructors:
 * 
 */

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
const person=new Person("saurav","kumar",12,"blue");
console.log(person.name())

