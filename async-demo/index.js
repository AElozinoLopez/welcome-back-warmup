console.log("Before");
getUser('Splendour');
console.log("After");

function getUser(id) {
    setTimeout(() => {
        console.log('Thank you for visiting techSpire!', id);
    }, 2000)
}

// Using A Callback to access an object in an asynchronous code
console.log("Before");
getUser('Splendour');
console.log("After");

function getUser(id) {
    setTimeout(() => {
        console.log('Thank you for visiting techSpire!', id);
        callback({id: 1, gitHubUserName: "babySplendour"});
    }, 2000)
}