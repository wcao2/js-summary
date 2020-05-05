const link=document.querySelector('a');
//1:get the value of attribute
console.log(link.getAttribute('href'));

//2:first what attribute I want to change; second, what value I want to change to
link.setAttribute('href','https://www.baidu.com');
link.innerText='BaiDu website';
console.log(link.getAttribute('href'));


const msg=document.querySelector('p');
//print the value of class attribute
console.log(msg.getAttribute('class'));
//set class attribute with another value
msg.setAttribute('class','success');
//create a new attribute to this tag
msg.setAttribute('style','color:green;');

//!!!!!!!!!the drawback of setAttribute is that will overwrite the original style

const title=document.querySelector('h2');
console.log("includes all the properties ",title.style)
console.log(title.style.color);
//add other css style
title.style.margin='50px';
//remove it
title.style.margin='';
// title.setAttribute('style','color:red');  overwrite
title.style.color='crimson';
title.style.fontSize= '36px';