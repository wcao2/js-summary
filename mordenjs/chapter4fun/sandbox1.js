//distinguish function and method

//function
const greet=()=> 'hello';
let resultOne=greet();
console.log(resultOne);

//method
const name='David'
let resultTwo=name.toUpperCase();
console.log(resultTwo);


//function also can be argument, which is callback function
const myFunc=(callbackFunc)=>{
    let value=50;
    callbackFunc(value);
};

// myFunc(function(valu){
//     console.log(valu);
// });

myFunc(valu=>{
    console.log(valu);
});


let people=['A','B','C','D','E'];
//iterate array use forEach(method) and use call back function which pass through as parameter
//for each individual element,we get that element as our first parameter
// people.forEach(function(person, p){
//     console.log(p,person);
// });

//callback func:normal I pass it to another function as an argument
const logPerson=(person,index)=>{
    console.log(`${index} -hello ${person}`);//template string
};
people.forEach(logPerson);