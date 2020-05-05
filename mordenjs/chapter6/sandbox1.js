//change the text inside the elements

//get the first paragraph and change the text inside the paragraph
const para=document.querySelector('p');
//innerText is a property not a method
console.log("this is inner Text  ",para.innerText);
//set something else(without +), + means add to the original text
para.innerText +=' wei cao is a good person';

const paras=document.querySelectorAll('p');
//cycle through the nodeList of all these different p tag and for each one to fire this function and take individual paragraph
paras.forEach(para=>{
    console.log("cycle through paras ",para.innerText);
    para.innerText+='  New text';
})

const content1=document.querySelector('.content');
console.log(content1.innerHTML);
//Update it(without +)
content1.innerHTML +='<h2>this is a new H2</h2>';

console.log("==============================================================");

const content=document.querySelector('.content');
const people=['A','B','C'];
people.forEach(person=>{
    content.innerHTML +=`<p>${person}</p>`;
})
