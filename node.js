// Example using stdin and stdout
console.log('Please enter a number');
process.stdin.on('data', (data) => {
    const num = parseInt(data.toString())
    if (num % 2 === 0) {
        process.stdout.write(num.toString() + "is even")
    }
    else {
        process.stdout.write  (num.toString() + "is odd")
    }
})

process.on('beforeExit', () => {
    console.log('I am here before exit');
})

process.on('exit', () => {
    console.log('I am here on exit');
})