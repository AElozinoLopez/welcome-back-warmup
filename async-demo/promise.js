const promise = new Promise ((resolve, reject) => {
    // resolve(1);
    // reject(new Error('Fail!'));  //don't pass a string when handling an object... use am error object
    let x = 5
    if (x < 5) {
        resolve('Success');
    } else {
        reject(new Error('Error message'));
    }
});

// Consuming the promise
promise.then(result => console.log(result))
       .catch(err => console.log('Error', err.message));
// console.log(promise);