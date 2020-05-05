//Strings
console.log("hello world");

let email="864352877@qq.com";
console.log(email);

//String concatenation(join)
let fname="Wei";
let lname="Cao";
let fullname=fname+" "+lname;
console.log(fullname);


//getting characters,getting first letter
console.log(fullname[0]);

//string length(property of the string)
console.log(fullname.length);

//string methods(function)
console.log(fullname.toUpperCase());
let result=fullname.toLowerCase();
console.log(result);

let index=email.indexOf('@');
//strat from 0
console.log("first index of @ is ",index);

let result1=email.lastIndexOf('7');
console.log("last index of '7' is "+result1); 

let result2=email.slice(0,5);
console.log('start from 0, length is 5: ',result2);

let result3=email.substr(2,5);//legnth 5
console.log(result3);

let result4=email.replace(8,9);
console.log('only replace the first one: ',result4);

let radius=10;
const pi=3.14;
console.log(radius**2*pi);

let likes=10;
let result5='the blog has ' +likes+' likes';
console.log(result5);
