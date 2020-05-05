const posts=[
    {title:'Post one',body:'This is post one'},
    {title:'Post two',body:'This is post two'},
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        });
        //insert it into the body
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve11,reject11)=>{
        setTimeout(()=>{
            posts.push(post);

            //when above finish, come here
            const error=false;

            if(!error){
                resolve11("Hello world!");
                //once it resolves then it will call getPost
            }else{
                reject11('Error:Sth wrong')
            }
        },2000);
    });
}

createPost({title: 'Post four', body: 'This is post four'})
    .then(getPosts)
    .catch(error=>console.log(error));

//Promises.all
const promise1= Promise.resolve('Hello World');
const promise2=10;
const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'Bye'));

//worked with fetch API to make Ajax calls or to make HTTP request||  map the response to json
const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>
    res.json()
);

//take the array of promises
Promise.all([promise1,promise2,promise3,promise4]).then(
    (values)=>console.log(values));