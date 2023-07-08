const promise = new Promise ((resolve, reject) => {
    resolve(1);
    // reject('Message')
});

// Consuming the promise
promise.then(result => console.log(result));
// console.log(promise);