//59:
//constructor function 
//create a Constructor function 
function Person(firstName,lastName,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    //this.dob=dob;
    //turns to date object
    this.dob=new Date(dob);
    // this.getBirthYear=function(){
    //     return this.dob.getFullYear();
    // }
    this.getFullName=function(){
        // template string 
        return `${this.firstName} ${this.lastName}`;
    }
}
//in chrome, you can see this in prototype, I do not want to initiatite getBirthYear everytime even I do not use it
Person.prototype.getBirthYear=function(){
    return this.dob.getFullYear();
}

//Instantiate object
const person1=new Person('John','Doe','4-3-1980');
const person2=new Person('Mary','Smith','12-12-1992');
console.log(person1);
console.log(person2.dob);

//when have date object, there are bunch of methods can call on it
console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());

console.log(person1.getFullName());



