//46.42

const x=10;
if(x==10){// ||:or  &&:and
    console.log('x is 10');
}else if(x>10) {
    console.log('x is greater than 10');
}else{
    console.log('x is less than 10');
}
//======================================
//assign variables based on a condition(ternary operator,shorthand if statement)
const color=x>10 ? 'red':'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}
//==========================================
//function
function addNums(num1,num2){
    console.log(num1+num2);
}
addNums(5,4);
//es6(same as above)
const addNums1=(num1=1,num2=2)=>{
    //for most part, it not use console log the function, usually going to return sth from it
    return num1+num2;
}
console.log(addNums1(5,5));//overwrite

const addNums1= num1 => num1+5;
console.log(addNums1(5));