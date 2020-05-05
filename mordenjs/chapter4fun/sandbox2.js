//by using css selector, I get a reference to the 'ul'
const ul=document.querySelector('.people');
const people=['Abcde','Bcdef','Ccdef','Dcdef','Ecdef'];

let html=``;

people.forEach(function(person){
    //template string
    html+=`<li style="color:purple">${person}<li>`;
});

console.log(html);

//put html inside the ul
ul.innerHTML=html;