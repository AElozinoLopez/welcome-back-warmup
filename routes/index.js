const express = require('express');

// Creating the router app
const router = express.Router();

// CRUD
 router.get ('/', (req, res) => {
    res.status(200).send('Hello OSCArians!');
 })