console.log("Before");
getUser('Splendour');
console.log("After");

function getUser(id) {
    setTimeout(() => {
        console.log('Thank you for visiting techSpire!', id);
    }, 2000)
}