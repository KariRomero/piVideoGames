const axios = require ('axios');
require("dotenv").config();
const {API_KEY} = process.env;
const { Genres } = require('../db')

const createGenres = async () => {
    const apiGenres = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
    const genres = await apiGenres.map((genre) => genre.name);

    genres.map(e=>Genres.findOrCreate({
        where:{name:e}
    }))

    const allGenres = await Genres.findAll();
    return allGenres;
     
}

module.exports = { 
    createGenres 
};

