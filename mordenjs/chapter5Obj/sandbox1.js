// Store object instead of single string in an Array
 //const blogs=[
//     {title:'you are so good',likes:30},
//     {title:'tomorrow will be rain',likes:49}
// ];


let user={
    name:'crystal',
    age:30,
    email:'wcao2@gmu.edu',
    location:'shanghai',
    blogs:[ 
        {title:'you are so good',likes:30},
        {title:'tomorrow will be rain',likes:49}
    ],
    login:function(){
        console.log('the user logged in..');
    },
    logout(){
        console.log('user log out..');
    },
    logBlogs:function(){
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog=>{
            console.log(blog.title,blog.likes);
        })
    }
};

user.logBlogs();
user.logBlogs();
