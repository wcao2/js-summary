//alert("helo world");
console.error('This is an error');
console.warn('This is a warning');

//In JS, set variables
//var(globally scoped,don't use it) let and const(these two have a block-level scope)

//Main primitive Datatype: String, Numbers, Boolean, null, undefined
const name='Wei Cao';
const age=30;
// const rating=4.6;// there are no decimal or float in JS, it is just a number
// const isCool=true;
// const x=null;
// const y=undefined;
// let z;
console.log(typeof name);

//Concatenation
console.log('My name is '+ name + 'and I am ' +age);
//Template String
const hello=`My name is ${name} and I am ${age}`;
console.log(hello);

//property doesn't have ()
console.log(hello.length);
//method
console.log(hello.toUpperCase());
//start from 0 stop before 2
console.log(hello.substring(0,2));
//result is an array，by letter
console.log(hello.split(''));

const s ='technology, computers, it, code';
//take this string and create an array for it 
console.log(s.split(', '));//comma space

//Arrays: variable that hold multiple values(don't need to have same datatype in array)
const numbers=new Array(1,2,3,4,5,true,'pears');
//Array is zero based
console.log(numbers[1]); 
numbers[7]='grapes';//add another, it is not good, cos don't know how many in the array
numbers.push('mangos');//push the value to the end
numbers.unshift('strawberry');//add to the beginning
numbers.pop();//remove the last one
console.log(numbers);

//check if sth is an array or not
console.log(Array.isArray(numbers));
//give index of certain value
console.log(numbers.indexOf('pears'));

//=====================================================================
//object   include array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
const person={
    firstName:'Wei',
    lastName:'Cao',
    age:30,
    hobbies:['music','movies','sports'],
    //put an object within an object  
    address:{
        street:'50 mian st',
        city:'fairfax',
        state:'VA'
    }
}
console.log(person.firstName,person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

//this is not assigning,it is pulling different things out, destructuring
const {firstName,lastName,address:{city}}=person;

console.log(firstName+" "+lastName+" lives in "+city);
//add another property
person.email='wcao2@mason.gmu.edu';
console.log(person);

//========================================
//Array of Object   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Array includes objects
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with Xi',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    },
];

console.log(todos);//array with three objects
//second element in array with text property
console.log(todos[1].text);

//JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串
const todoJSON=JSON.stringify(todos);
console.log(todoJSON);//get a Json string

//===========================================
//For Loop
for(let i=0;i<10;i++){
    console.log(`For Loop number:${i}`);
}
//For Loop
for(let i=0;i<todos.length;i++){
    console.log(todos[i].text+" hahahah");
}
//For Loop
for(let todo of todos){
    console.log(todo.text+" yeahyeahyeah");
}
//While Loop(need to set a variable outside a for loop)
let i= 0;
while(i<10){
    console.log(`While Loop number: ${i}`);
    i++;
}
//============================================
//high order array method
//1:forEach
//just loop through them
todos.forEach(function(todo){
    console.log(todo.text+" wuwuwuwu");
});
todos.forEach((todo)=>console.log(todo));//same as above

//2:map 
//create an new array from an array
const todoText=todos.map(function(todo){
    //return text
    return todo.text;
});
console.log(todoText+" Only have text");

//3:filter
//create an new array(based on condition) of completed:true
const todoCompleted=todos.filter(function(todo){
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);

//until46.42