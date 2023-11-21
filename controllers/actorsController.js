const express = require('express');
const actors = express.Router();
const { getAllActors } = require('../queries/actor_query.js');




// INDEX
actors.get('/', async (req, res, next) => {
   const allActors = await getAllActors();
   if (allActors[0]) {
    res.status(200).json(allActors);
   } else {
    res.status(500).json({ error: 'server error'});
   }
   
});





module.exports = actors;