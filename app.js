const express = require('express')
const app = express()

const port = 3000

app.get ('/', (req, res) => {
    res.send ('Hello World, I am back!')
})

app.listen (port, () => {
    console.log(`Welcome back app is listening on port ${port}`)
})