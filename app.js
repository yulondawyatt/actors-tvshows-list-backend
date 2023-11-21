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
    res.send('Welecome to the Actors in Television App!')
});

// 404 PAGE
app.get('*', (req, res, next) => {
    res.status(404).send('Page Not Found');
});


// Actors ROUTES
app.use('/actors', actorsController);





module.exports = app;





