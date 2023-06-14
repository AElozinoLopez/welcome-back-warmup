console.log('Please enter a number');
ProcessingInstruction.stdin.on('data', (data) => {
    const num = parseInt(data.toString())
    if (num % 2 === 0) {
        precess.stdout.write(num.toString() + "is even")
    }
    else {
        ProcessingInstruction.stdout.write  (num.toString() + "is odd")
    }
})