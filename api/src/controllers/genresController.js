const axios = require ('axios');
require("dotenv").config();
const {API_KEY} = process.env;
const { Genres } = require('../db')

const createGenres = async () => {
    const apiGenres = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
    const genres = await apiGenres.map((genre) => genre.name);

    const genresOrdenados = genres.sort((a,b)=>a.toLowerCase().localeCompare(b.toLowerCase()))

    genresOrdenados.map(e=>Genres.findOrCreate({
        where:{name:e}
    }))

    const allGenres = await Genres.findAll();
    return allGenres;
     
}

module.exports = { 
    createGenres 
};

