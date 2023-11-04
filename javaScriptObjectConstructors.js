// const obj={
//     id:1,
//     name:"abc",
//     age:12
// }

// above is the object that is static 
// so for creating the dynamic object we can use  constructor 
// syntax 

function Person(id,givenName,age){
    this.id=id;
    this.name=givenName;
    this.age=age;
    this.getName = function() {
        return `name is ${this.name}`
    };
}
// you can not add a new property to an existing object constructor:
// Person.country="india";
const person1=new Person(1,"abc",13);
console.log(person1.getName())
console.log(person1.country) // undefined 
