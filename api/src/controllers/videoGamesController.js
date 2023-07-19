const axios = require('axios');
require("dotenv").config();
const {API_KEY} = process.env;
const { Videogames } = require('../db')



const getAllVideogames = () => {};



const searchByName = () => {}; 



const getVideogameById = async (id,source) => {
    const videoGame = 
    source === 'Api' 
    ?(await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data 
    :await Videogames.findByPk(id);

    return videoGame;
};

const postVideoGamesController = (req,res) => {
    const { datosVideoGames } = req.body;
    res.send(`NIY: esta ruta recibirá los siguientes datos para crear un videojuego y relacionarlo con los generos solicitados:
    datos: ${datosVideoGames}`)
};

module.exports={
    getVideogameById,
    searchByName,
    getAllVideogames,
    postVideoGamesController
};
