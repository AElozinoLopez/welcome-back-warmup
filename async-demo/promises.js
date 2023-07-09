// const promise = new Promise ((resolve, reject) => {
//     // resolve(1);
//     // reject(new Error('Fail!'));  //don't pass a string when handling an object... use am error object
//     let x = 4
//     if (x < 5) {
//         resolve('Success');
//     } else {
//         reject(new Error('Error message'));
//     }
// });

// // Consuming the promise
// promise.then(result => console.log(result))
//        .catch(err => console.log('Error', err.message));
// // console.log(promise);

// function getUsers () {
//     return new Promise((resolve, reject) =>{
//         setTimeout(function(){
//             const result = true;
//             if(result) {
//                 resolve([
//                     {username: 'AElozino', email: 'aelozino@gmail.com'},
//                     {username: 'Peace', email: "peace.o@gmail.com"}
//                 ])
//             } else {
//                 reject(new Error('Something went wrong'));
//             }
            
//         }, 5000)
//     })
// }

// // Promise.then(onFulfilled, onRejected);

// function onFulfilled(users) {
//     console.log(users);
// }

// function onRejected (error){
//     console.log(error.message);
// }

// const promise = getUsers();

// promise.then(onFulfilled, onRejected); 


// Using  Promise to replace the callbacks 
console.log("Before");
getUser(1, function(user){
    // console.log('User..', user)
        getRepositories (user.gitHubUserName, (repos) => { 
            getCommits (repos[0], (commits) => {
                console.log(commits);
            })
        })   
    });

    
console.log("After");

function getUser(id) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('Thank you for visiting techSpire!');
            resolve({id: id, gitHubUserName: "babySplendour"});
        }, 2000);
    })
    
}

function getRepositories(user, callback) {
    setTimeout (() => {
        console.log("Calling GitHub API...");
        callback (["Repo1", "Repo2", "Repo3"]);
    }, 2000)
    
}

function getCommits (repo, callback) {
    setTimeout (()=> {
        console.log('Getting user commits..');
        callback(['commit']);
    }, 2000)
}

// Introducing the name function
function getCommits (commits) {
    console.log(commits);
}

function getRepositories (repos) {
    console.log(repos);
}

