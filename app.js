// DEPENDENCES
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');


// CONFIGURATION
const app = express();


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// ROUTES
app.get('/', (req, res, next) => {
    res.send('Welecome to the Actors in Television App!')
});






module.exports = app;





