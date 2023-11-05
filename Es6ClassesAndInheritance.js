class Employee {
    constructor(name,experience,division){
        this.name=name;
        this.experience=experience;
        this.division=division;
    }
    slogan(){
        return ` I am ${this.name} and this compmnay is the best` 
    }
    joiningYear=function(){
       return "234"
    }
    static add(a,b){
        return a+b;
    }
}
class Programmer extends Employee{
    constructor(name,experience,division,language){
        super(name,experience,division);
        this.language=language;
    }
    favoriteLang(){
        return "java";
    }
}
// const employee1=new Employee("abc",1,"21A");
// console.log(employee1)
// console.log(employee1.slogan())
// console.log(employee1.joiningYear())
// console.log(Employee.add(4,6))

const programmer=new Programmer("abc",2,"123a","javascript")
console.log(programmer)
console.log(programmer.joiningYear())
console.log(programmer.slogan())
console.log(Programmer.add(4,8))