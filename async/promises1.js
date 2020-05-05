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

            const error=false;

            if(!error){
                resolve11();
                //once it resolves then it will call getPost
            }else{
                reject11('Error:Sth wrong')
            }
        },2000);
    });
}

//Await is a cleaner way to do with promises instead of doing .then
//everything just one after another, there's no dot then

//Async/await
async function init(){
    //await is for an asynchronous process or action to complete

    await createPost({title:'hello world',body:'I enjoy eating'});
    //waiting above to be done until go to the next
    getPosts();
}

init();

//Async/await with /fetch
async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    //fetch is werid cos first promise returns I need to call res.json()
    const data=await res.json();
    console.log(data);
}

fetchUsers(); 

