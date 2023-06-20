const express = require('express');
const app = express();
const {router} = require ('./routes');

const port = process.env.PORT || 3000; 

// Middleware
app.use(router);
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

const courses = [
    {id: 1, name: 'JavaScript'},
    {id: 1, name: 'MongoDB'},
    {id: 1, name: 'MySQL'},
    {id: 1, name: 'Node'}

]

// Global Route
app.get ('/', (req, res) => {
    res.send ('Hello World, I am back!')
})

// Route for all the courses
app.get ('/api/courses', (req, res) => {
    res.send(courses);
})

// Route to get one course
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with then given id was not found');
    res.send(course);
})


app.get("/secret", (req, res) => {
    res.status(401).json({message: "unauthorised"})
});


app.listen (port, () => {
    console.log(`Welcome back app is listening on port ${port}`)
})