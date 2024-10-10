const posts =[
    {
        title: 'post one',body:'this is post one'
    },
    {
        title: 'post two',body:'this is post two'
    }
]

const getpost = () => {
    setTimeout(() => {
        let output ='';
        posts.forEach ((post,index) =>{
            output = output + `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

const CreatePosts = (post) => {
//     setInterval(()=>{
//     posts.push(post)
//     callback();
// },2000);
}


getpost();
CreatePosts({ title: 'post three', body: 'this is post three' },getpost);