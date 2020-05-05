//https://www.youtube.com/watch?v=PkZNo7MFNFg&t=1758s

var ourArray=[1,2,3];

//removedFromArray now equals 3, and ourArray equals [1,2]
var removedFromArray=ourArray.pop();
console.log("removedFromArray is "+removedFromArray);
console.log("ourArray is(the rest is) "+ourArray);

//Setup
var myArray=[["John",23],["cat",2]];

//the shift element of the array is similar to pop, but it removes the first element of an array
var ourArray1= ["David", "X",["cat"]];
var removedFromArray1=ourArray1.shift();
console.log("removedFromArray1 is "+removedFromArray1);
console.log("ourArray1 is(the rest is) "+ourArray1);

//the unshift function is similar to push function, unshift add the element to the beginning of an array
ourArray.unshift("0");
console.log("the new ourArray is "+ourArray);

//shopping list starts from 50:48
//create an array of arrays which is my shopping list
var myList=[["cereal",3],["milk",2],["bananas",2],["juice",2],["eggs",12]];

//function allow us to create reusable code in js
//pass values to functions with arguments
function funWithArray(a,b){
    console.log(a-b);
}
funWithArray(3,2);

//scope(55:50):scope refers to the visibility of variables
//variable defined outside of a function block have global scope(can be seen everywhere in js code)
var myGlobal=10;
function fun1(){
    //without keywords var, it is a global variable
    oopsGlobal=5;
}

function fun2(){
    var output="";
    if(typeof myGlobal!="undefined"){
        output+=" myGlobal: "+myGlobal;
    }
    if(typeof oopsGlobal !="undefined"){
        output+="oopsGlobal: "+oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
