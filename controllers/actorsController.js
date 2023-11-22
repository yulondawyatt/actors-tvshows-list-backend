const express = require('express');
const actors = express.Router();
const { getAllActors, getActor } = require('../queries/actor_query.js');




// INDEX GET all actors
// localhost: 3003/actors
actors.get('/', async (req, res, next) => {
   const allActors = await getAllActors();
   if (allActors[0]) {
    res.status(200).json(allActors);
   } else {
    res.status(500).json({ error: 'server error'});
   }
});


// GET one actor
actors.get('/:actors_id', async(req, res, next) => {
    const {actors_id} = req.params;
    const oneActor = await getActor(actors_id);
    if (oneActor) {
    res.status(200).json(oneActor);
    } else {
        res.status(404).json({error: 'Actor Not Found'});
    }
});





module.exports = actors;