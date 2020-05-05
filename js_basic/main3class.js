//1：08 es6 import classes
//create a class:prettier way
class Person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }
    //the method will definitely in the prototype
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1=new Person('John','Doe','4-3-1980');
const person2=new Person('Mary','Smith','12-12-1992');
console.log(person1);
console.log(person2.dob);
//do different with dates and format them in different ways
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());

console.log(person1.getFullName());