//JS has some built-in object such as date object , math object,string object(uppercase())

//object literals
//Object in real life have properties and thing they can do(methods)
//create a variable to store the object in
let user={
    name:'crystal',
    age:30,
    email:'wcao2@gmu.edu',
    location:'shanghai',
    blogs:['you are so good','tomorrow will be rain'],
    login:function(){//regular func
        console.log('the user logged in..');
    },
    logout(){//regular func
        console.log('user log out..');
    },
    //if i use arrow function in here, this will refer the window object
    logBlogs:function(){
        console.log('this user has written the following blogs: ');
        //this refers to user object
        this.blogs.forEach(blog=>{
            console.log(blog);
        })
        //if I use the arrow function, the result below is window object
        //console.log(this);
    }
};

console.log(user);
console.log(user.age);//or
console.log(user['age']);
//update
user.age=35;
console.log(user.age);
//or use square brackets
user['age']=40;
console.log(user['age']);

//check the type of object
console.log(typeof user);

//use method
user.login();
user.logout();

//window object 
console.log(this);

//when I call the method,js sets the value of 'this' keyword to be the object which method was used on
user.logBlogs();