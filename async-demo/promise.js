const promise = new Promise ((resolve, reject) => {
    resolve(1);
    reject(new Error('Fail!'));  //don't pass a string when handling an object... use am error object
});

// Consuming the promise
promise.then(result => console.log(result))
       .catch(err => console.log(err.message));
// console.log(promise);