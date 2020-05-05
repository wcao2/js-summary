//primitive types:numbers,strings,Booleans,null,undefined,symbols(stored in the stack)

let scoreOne=50;
let scoreTwo=scoreOne;

console.log(`scoreOne:${scoreOne}`,`scoreTwo:${scoreTwo}`);

scoreOne=100;
console.log(`scoreOne:${scoreOne}`,`scoreTwo:${scoreTwo}`);

//reference types:all type of object(object literals,array,functions,dates,all other objects)(stored on the heap)
//add a pointer to that object in the stack
const userOne= {name:'Wei',age:30};//only store once at heap, with two separate pointers
const userTwo= userOne;
console.log(userOne,userTwo);
userOne.age=40;
//due to pointer1 and 2 are both point to the same object,so both are updated
console.log(userOne,userTwo);