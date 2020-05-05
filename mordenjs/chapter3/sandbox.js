//1:for loops(initialization,conditional,final expression)
for(let i=0;i<5;i++){
    console.log('in loop: ',i);
}

console.log('loop finished');

const names=['A','B','C'];
for(let i=0;i<names.length;i++){
    // console.log(i);
    // console.log(names[i]);
    let html=`<div>${names[i]}</div>`;
    console.log(html);
}

//2:while loop
let i=0;
console.log('the length of names is:  ',names.length);
while(i<names.length){
    console.log(names[i]);
    i++;
}

//3:do while loop
i=0;

do{
    console.log('val of i is: '+i);
    i++;
} while(i<5);

//4:if
//logicl operator: OR||   AND &&(first execute)
const age=25;
if(age>20){
    console.log('you are over 20 years old');
}

const password='12345@131241';
if(password.length>10 && password.includes('@')){
    console.log("that password is strong!");
}else if (password.length>5 ||password.includes('@')) {
    console.log("is good");
} else {
    console.log("too short");
}

//5:logical not(exclamation mark)
let condtion=false;
if(!condtion){
    console.log("lalalala");
}

//6:break(out of the loop) 
//  continue(break out the current loop and go back to the top and continue with the next loop)
const scores=[50,20,100,28];
for(let i=0;i<scores.length;i++){
    console.log("ur score is "+scores[i]);
        if(scores[i]===100){
            console.log('congratulations! you get the high score.');
            break;
        }
}
for(let i=0;i<scores.length;i++){
    if(scores[i]===20){
        continue;
    }
    console.log("ur score is "+scores[i]);
}

//7:switch statement
const grade='p';
switch(grade){
    //in here is strict equality
    case 'A':
        console.log('u got A!');
        break;
    case 'B':
        console.log('u got B!');
        break;
    case 'C':
        console.log('u got C!');
        break;
    case 'D':
        console.log('u got D!');
        break;
    default:
        console.log('u do not got a valid grade');
}

//8:variables & block scope
let age1=30;//here is root level scope or global level scope
if(true){
    //create the variable inside the code block. no error because they are not in the same scope
    //age1=40 is just reassign the value
    let age1=40;
    console.log('inside code block: ',age1);
}
console.log('outside code block: ',age1);
























