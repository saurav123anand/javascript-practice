// const proto={
//     // below all will go in prototype;
//     country:"india",
//     slogan:function(){
//         return "this company is best ";
//     },
//     changeName:function(givenName){
//         this.name=givenName;
//     },
//     greet(name){
//         this.name="greeet"+" "+name;
//     }
// }
// const obj=Object.create(proto);
// console.log(obj) // {}
// obj.name="anand"
// obj.changeName("saurav")
// obj.greet("keshav")
// console.log(obj)
// console.log(obj.name)
// console.log(obj.country)

// Inheritance 

function Employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience
}
Employee.prototype.slogan=function(){
    return `this compnay is the best `;
}

function Programmer(name,salary,experience,language){
    // Inheriating  all properties except proototype methods and variables 
    Employee.call(this,name,salary,experience);
    this.language=language;
}
// inherit the prototype
Programmer.prototype=Object.create(Employee.prototype)
//manually set the constructor 
Programmer.prototype.constructor=Programmer;
const programmer=new Programmer("dummy",12,1,"javascript");
console.log(programmer)
console.log(programmer.slogan())