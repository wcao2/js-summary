//event 1:24:47
const btn=document.querySelector('.btn');
const ul = document.querySelector('.items');
//first parameter is an event, second is a function
btn.addEventListener('click',(e) =>{//besides click, there are mouseover and mouseout can be used
    //stop default behaviour: do not submit to the file, in order to get the click in console
    e.preventDefault();//the form no longer actually submitting
    console.log('click');
    console.log(e);
    console.log(e.target);//give me a actual element
    console.log(e.target.className);//give that element's className
    //#my-form is a id
    document.querySelector('#my-form').style.background='#ccc';//when click, change the form background color;
    document.querySelector('body').classList.add('bg-dark');//add class 'bg-dark'
    //document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';//change the text I want when I click
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});