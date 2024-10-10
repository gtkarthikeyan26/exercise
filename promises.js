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
    return new Promise((resolve, reject) => {
        // Simulate a delay before adding the post
        setTimeout(() => {
            const error = false; // Simulate no error
            if (!error) {
                posts.push(post); // Add the new post
                resolve(); // Resolve the promise
            } else {
                reject('Error occurred'); // Reject the promise
            }
        }, 2000); // Delay of 2 seconds before adding the post
        // abvo is cooking
        // gotocustomer
    });
};
// CreatePosts({ title: 'post three', body: 'this is post three' })
//     .then(() => {
//         getpost(); // Call getpost after the promise resolves
//     })
//     .catch(error => console.log(error));


// const promise1 = Promise.resolve('hello world'); // Corrected to Promise
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => { // Corrected to Promise
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

// Promise.all([promise1, promise2, promise3,promise4]) // Corrected to Promise
//     .then(values => console.log(values));





//async/await


// async function init() {
//     await CreatePosts({ title: 'post three', body: 'this is post three' })

//     getpost()
// }

// init();

async function fetchusers(){
    const res= await fetch
    ('https://jsonplaceholder.typicode.com/users')

    const data = await res.json()
    console.log(data)
}

fetchusers();