// console.log("Before");
// getUser('Splendour');
// console.log("After");

// function getUser(id) {
//     setTimeout(() => {
//         console.log('Thank you for visiting techSpire!', id);
//     }, 2000)
// }

// Using A Callback to access an object in an asynchronous code
console.log("Before");
getUser(1, function(user){
    console.log(user)
});

console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Thank you for visiting techSpire!');
        callback({id: id, gitHubUserName: "babySplendour"});
    }, 2000);
}

function getRepositories() {
    return ["Repo1", "Repo2", "Repo3"]
}