const axios = require ('axios');
require("dotenv").config();
const {API_KEY} = process.env;
const { Genres } = require('../db')

const createGenres = async () => {
    const apiGenres = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data.results;
    const genres = apiGenres.map((genre) => genre.name);
    const newGenre = await Genres.bulkCreate(genres.map((name)=>({name})));    
}

module.exports = { 
    createGenres 
};