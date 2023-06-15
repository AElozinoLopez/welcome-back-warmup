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

