console.log("Before");
getUser(1);
console.log("After");

function getUser(id) {
    setTimeout(() => {
        console.log('Thank you for visiting techSpire!');
    }, 2000)
}