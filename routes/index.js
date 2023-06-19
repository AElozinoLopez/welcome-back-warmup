const express = require('express');

// Creating the router app
const router = express.Router();

// CRUD
// GET
 router.get ('/', (req, res) => {
    res.status(200).send('Hello OSCArians!');
 })

// Exporting File Out For Use In Other Locations
module.exports = {
    router
}