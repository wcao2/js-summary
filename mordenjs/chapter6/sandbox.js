//everything I do to interact with Broswer is going to be governed by Document Object Model 
//once the HTML document is loaded in the broswer,the broswer creates an object which models this document
//there are different properties and methods on this object
//1 and 2 both on the document object to query the dom and grab elements from it

//1:reaching into the DOM and get a handle or a reference on certain(single) elements
// store our reference to this element in some kind of variable

//grab the first p tag and ingore the rest of it 
const para=document.querySelector('p');
console.log(para);

//grab the p tag by using class selector and get the first error class
const para1=document.querySelector('.error');
console.log(para1);

const para2=document.querySelector('div.error');
console.log(para2);


//2:grab multiple elements
//get a reference to all of the p tags and store it as a collection inside para3 const
const para3=document.querySelectorAll('p');
console.log(para3);
console.log(para3[0]);

para3.forEach(para=>{
    console.log("for each ...",para);
});

const para4=document.querySelectorAll('.error');
console.log(para4);

//=========================================================
console.log("==============================================================");
//some alternative ways to query the DOM to grab elements!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//1 : grab element by ID
const title=document.getElementById('page-title');
console.log(title);

//2: get elements by their class name
const errors=document.getElementsByClassName('error');
console.log(errors[0]);
//but I cannot use forEach in here because errors is HTML collection

//3:get elements based on the tag name
const paras=document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);













