const express = require('express');
const app = express();
const {router} = require ('./routes');

const port = 3000;

// Middleware
app.use(router);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/secret", (req, res) => {
    res.status(401).json({message: "unauthorised"})
});

app.get ('/', (req, res) => {
    res.send ('Hello World, I am back!')
})

app.listen (port, () => {
    console.log(`Welcome back app is listening on port ${port}`)
})