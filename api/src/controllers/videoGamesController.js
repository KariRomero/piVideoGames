const axios = require('axios');
require("dotenv").config();
const { Op } = require('sequelize');
const {API_KEY} = process.env;
const { Videogames, Genres } = require('../db');


//////////////////////////////////
const cleanArray = (arr) => {
    return arr.map((elem) => {        
        return{
            id: elem.id,
            name: elem.name,
            description: elem.description,
            platforms: elem.platforms?.map(el => el.platform.name),
            image: elem.background_image,
            released: elem.released,
            rating: elem.rating,
            genres: elem.genres?.map(el => el.name)
        }
    })
};

const apiVideogames = async () => {
  let url = `https://api.rawg.io/api/games?key=${API_KEY}`;
  let videogames = [];
  try {
    for (i=0; i<5; i++){ //con un for recorro mi API, ya que es un arreglo, 5 veces
      const response = await axios.get(url); //realizo la peticion
      //en mi .data podemos encontrar dos propiedades, results que es es aquello que voy a mapear
      response.data.results.map(v=>{ //a la respuesta/resultado lo mapeo
        videogames.push({  //y pusheo en mi array vacio todo aquello que mapee
          id: v.id,
          name: v.name,
          image: v.background_image,
          rating: v.rating,
          platforms: v.platforms?.map(el => el.platform.name),
          genres: v.genres?.map(el => el.name)          
        });
      });
      //y next que es donde voy a entrar para pasar a la siguente pagina.
      url
       = response.data.next;
    } return videogames;    
  } catch (error) {
    console.log(error);    
  }
};

const dbVideogames = async () => {
  try {
    return await Videogames.findAll({ //SELECT * FROM Videogame 
      include: [{
        model: Genres, 
        atributes: ['name'], 
        throught: { 
            attributes: [] 
        }
    }]
    })    
  } catch (error) {
    console.log(error);    
  }
};




//////////////////////////////////


const getAllVideogames = async() => {
  //para unir mis dos solicitudes, guardo en una variable la ejecucion de mis funciones
  const videogamesDb = await dbVideogames();
  const videogamesApi = await apiVideogames();
  //ahora uno mis dos constantes contenedoras de funciones
  const allVideogames = videogamesDb.concat(videogamesApi);
  return allVideogames;
};

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

    
    return result.slice(0, 15);
  };

const getVideogameById = async (id,source) => {
    const videoGame = 
    source === 'Api' 
    ?(await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data 
    :await Videogames.findByPk(id);
       if(source==='Api'){
        const { id, name, description, released, platforms, parent_platforms, image,rating,genres} = videoGame;
        const platformVideogame = [platforms, parent_platforms]
            .flatMap(platform => platform.map(p=>p.platform.name));

        const genresVideogame = genres.map(g=>g.name);
            
        return {id, name, description, released, platformVideogame, image, rating, genresVideogame}

       }

    return videoGame;
};

const createVideogame = async ({ name, description, platforms, image, released, rating, genres }) => {
  let newVideogame = await Videogames.create({
    name,
    description,
    platforms,
    image,
    released,
    rating,
  });

  const relacion = await Genres.findAll({
    where: {
      name: genres,
    },
  });
  console.log(relacion);
  await newVideogame.addGenres(relacion);
  return newVideogame;
};


module.exports={
    getVideogameById,
    searchByName,
    getAllVideogames,
    createVideogame,                
};
