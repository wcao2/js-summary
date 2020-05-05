const content=document.querySelector('p');
//list of all the different classes this element has
console.log(content.classList);
//add classes
content.classList.add('error');
content.classList.remove('error');

console.log("=============================");

//this return a old list, so I can use forEach on a old list
const paras=document.querySelectorAll('p');
paras.forEach(p=>{
    //console.log(p.innerText);  innerText get all the visable <span style="display:none;">error</span>
    //console.log(p.textContent);
    //includes is a string method
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }else if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});

const title=document.querySelector('.title');//grab the title class
//this is based on other class, if it exists
title.classList.toggle('test');//add class test
title.classList.toggle('test');//remove class test
