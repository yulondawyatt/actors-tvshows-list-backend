const express = require('express');
const actors = express.Router();




// INDEX
actors.get('/', (req, res, next) => {
    res.json({ status: 'ok' });
});





module.exports = actors;