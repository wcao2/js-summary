//dom 1:10
//talke HTML elements and put them into a variable

//===============================
//Single element
//console.log(document.getElementById('my-form'));
//same as above
const form=document.getElementById('my-form');
console.log(form);

//class || tag || id
console.log(document.querySelector('.container'));
//class="item":select all of the item              class || tag || id
console.log(document.querySelectorAll('.item'));
//===============================
//Multiple element
console.log(document.getElementsByClassName('item'));//old
console.log(document.getElementsByTagName('li'));//old
console.log(document.querySelectorAll('.item')+"lalalalalalla");

//===============================
const items=document.querySelectorAll('.item');
items.forEach((item)=>console.log(item));

//===============================
// Manipulate the DOM
const ul=document.querySelector('.items');//class items 
//Remove all item
//ul.remove()

//Remove last one
//ul.lastElementChild.remove();

//edit content
ul.firstElementChild.textContent='Hello';
ul.children[1].innerText='nihao';//same as above 
//if want to add html dynamically
ul.lastElementChild.innerHTML='<h4>Hello come back</h4>';

const btn=document.querySelector('.btn');//class btn
btn.style.background='red';
