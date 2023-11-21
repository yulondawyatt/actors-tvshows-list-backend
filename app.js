// DEPENDENCES
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

//IMPORTS
const actorsController = require('./controllers/actorsController.js');


// CONFIGURATION
const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

/* ROUTES */
app.get('/', (req, res, next) => {
    res.send('Welcome to the Actors in Television App!')
});


// Actors ROUTES
app.use('/actors', actorsController);



// 404 PAGE
app.get('*', (req, res, next) => {
    res.status(404).send('Page Not Found');
});








module.exports = app;





