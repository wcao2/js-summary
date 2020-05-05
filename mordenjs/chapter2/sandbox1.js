//template strings
const title='Best read of 2019';
const author='Mario';
const likes=30;

//concatenation way
let result='The blog called '+title+' by '+author+' has '+likes+' likes ';
console.log(result);

//template string way     !!!!!!!!!!!!!!
//(embed the variable directly using this kind of syntax)
let result1= `That blog called ${title} by ${author} has ${likes} likes`;
console.log(result1);

//create html template
let html=`
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`;
console.log(html);

//Array!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//create a new array
let university=['gmu','ucla','gwu'];
//position 1 which is ucla
console.log(university[1]);
//how many elements inside the array
console.log('the number of elements in that array are: ',university.length);

//array methods!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//1:join all of the elements together with a - between them
let result2=university.join('-');
console.log(result2);
//2:get the index of the element
let result3=university.indexOf('gmu');
console.log(result3);
//3:concat take array with another array
let result4=university.concat([1,2]);
console.log(result4);
//4:push method:add the new element to an array; this method alter the original values
//the result is a new length of this new array
let result5=university.push('mit');
console.log(university);
console.log('the new length of the array ',result5);
//5:take of the original values;this method alter the original values
let result6=university.pop();
console.log('the result6 is: ',result6);//show the value will be removed
console.log(university);

//Undefined
let age;
console.log(age,age+3,`the age is ${age}`);
//Null
let age1=null;
console.log(age1,age1+3,`the age is ${age1}`); 


//Boolean
//1:boolean and comparisons
console.log(true,"true");
//2:methods can return booleans
let email='864352877@qq.com';
let result7=email.includes('@');
let result8=university.includes('ucla');
console.log('the result7 is ',result7);
console.log('the result8 is ',result8);
//3:comparison operators
age=25;
console.log(age==25);
console.log(age!=25);
console.log(age>=25);
//these things are equal even though the different type
//string can be converted to a number first
console.log('111111111111 ',age=='25');

//strict comparison(different types cannot be equal)
console.log(age==='25');
console.log(age!=='25');

//type conversion(turing one data type to another data type)
let score='100';
console.log('2222222222222222',score+1);
score=Number(score);
console.log(score+1);
//check the type
console.log(typeof score);

//positive and negative value are true
let result9=Boolean(0);
console.log(result9,typeof result9);

//string with any length will be true;no length will be false
result9=Boolean('0');
console.log(result9,typeof result9);
result9=Boolean('   ');
console.log(result9,typeof result9);













