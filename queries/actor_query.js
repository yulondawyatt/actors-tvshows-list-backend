const { ifError } = require('assert');
const db = require('../db/dbConfig.js');


const getAllActors = async () => {
    try {
        const allActors = await db.any('SELECT * FROM actors_tb');
        return allActors;
    } catch (error) {
        return error;
    }
};


const getActor = async (actors_id) => {
    try {
        const oneActor = await db.one('SELECT * FROM actor_query WHERE actors_id=$1', actors_id);
        return oneActor;
    } catch (error) {
        return error;
    }
}






module.exports = { getAllActors, getActor};