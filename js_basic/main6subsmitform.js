//grad these stuffs from the dom
const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

//want to listen a submit event on the form, the event is submit
myForm.addEventListener('submit',onsubmit );

function onsubmit(e){
    e.preventDefault();
    //console.log(nameInput.value);
    if(nameInput.value===''|| emailInput.value===''){
        //alert('Please enter fields');
        msg.classList.add('error');//add error class
        msg.innerHTML='Please enter all fields';
        //want to above disappear after 3 seconds
        setTimeout(()=>msg.remove(),3000);
    }else{
        //console.log('success');
        const li=document.createElement('li');
        //template string
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        //append the li to the ul
        userList.appendChild(li);

        //clear fields
        nameInput.value="";
        emailInput.value="";
        
    }
}