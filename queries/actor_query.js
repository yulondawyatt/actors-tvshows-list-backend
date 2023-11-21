const db = require('../db/dbConfig.js');


const getAllActors = async () => {
    try {
        const allActors = await db.any('SELECT * FROM actors_tb');
        return allActors;
    } catch (error) {
        return error;
    }
};








module.exports = { getAllActors};