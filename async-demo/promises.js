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

function getUsers () {
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            resolve([
                {username: 'AElozino', email: 'aelozino@gmail.com'},
                {username: 'Peace', email: "peace.o@gmail.com"}
            ])
        }, 5000)
    })
}

// Promise.then(onFulfilled, onRejected);

function onFulfilled(users) {
    console.log(users);
}

const promise = getUsers();

promise.then(onFulfilled);
