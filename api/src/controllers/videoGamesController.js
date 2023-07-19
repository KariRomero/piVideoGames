const axios = require('axios');
require("dotenv").config();
const { Op } = require('sequelize');
const {API_KEY} = process.env;
const { Videogames } = require('../db')

//////////////////////////////////
const cleanArray = (arr) => {
    return arr.map((elem) => {
        const platforms = [elem.platforms, elem.parent_platforms]
             .flatMap(platform => platform.map(p=>p.platform.name));

        const genres = elem.genres.map(g=>g.name);
        return{
            id: elem.id,
            name: elem.name,
            description: elem.description,
            platforms: platforms,
            background_image: elem.background_image,
            released: elem.released,
            rating: elem.rating,
            genres: genres
        }
    })
};
//////////////////////////////////


const getAllVideogames = async() => {
    const dbVideogames = await Videogames.findAll();

    const apiVideogames = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)).data.results;

    const apiVideogamesClean = cleanArray(apiVideogames);

    return [...dbVideogames, ...apiVideogamesClean];
};


// Por nombre: "https://api.rawg.io/api/games?search={game}"
// const searchByName = async (name) => {
//     const dbVideogames = await Videogames.findAll({ where: { name: name } });
    
//     const apiVideogames = (await axios.get(`https://api.rawg.io/api/games?search=${name}?key=${API_KEY}`)).data.results;

//     const apiVideogamesClean = cleanArray(apiVideogames);

//     return [...dbVideogames, ...apiVideogamesClean];

// }; 

const searchByName=async (name) => {
    const dbVideogames = await Videogames.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      limit: 15
    });

    const apiVideogames = (await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)).data.results;
    
    const apiVideogamesClean = cleanArray(apiVideogames);
    
    const filteredApi = apiVideogamesClean.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
    
    const result = [...dbVideogames, ...filteredApi];

    if (result.length === 0) {
      return { message: `Ningún videojuego coincide con: '${name}'` };
    }
    return result.slice(0, 15);
  };


const getVideogameById = async (id,source) => {
    const videoGame = 
    source === 'Api' 
    ?(await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data 
    :await Videogames.findByPk(id);
       if(source==='Api'){
        const { id, name, description, released, platforms, parent_platforms, background_image,rating,genres} = videoGame;
        const platformVideogame = [platforms, parent_platforms]
            .flatMap(platform => platform.map(p=>p.platform.name));

        const genresVideogame = genres.map(g=>g.name);
            
        return {id, name, description, released, platformVideogame,background_image,rating, genresVideogame}

       }

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
