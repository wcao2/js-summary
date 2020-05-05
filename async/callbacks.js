//Async is when sth going on,but don't wait until that thing done to continue my program
//Async is relevant to JS cos often make request to servers, it can take several second to get data back
//wait sth completely finish when move to next

//callback used for long time until es6 released 2015 where promise introduced

const posts=[
    {title:'Post one',body:'This is post one'},
    {title:'Post two',body:'This is post two'},
];


//mimicking how to fetch data from server
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        });
        //insert it into the body
        document.body.innerHTML=output;
    },1000);//after one second, it load the two post
}

//original
function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },2000)
}
//advanced
function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        //want callback1111 be called after push
        callback();
    },2000);
}

//getPosts();
//at first, getPosts use 1s but createPost use 2s, so it is impossible to add new post to show on the page
//so callback comes in, this function right after pushed on

createPost({title: 'Post three', body: 'This is post three'},getPosts);