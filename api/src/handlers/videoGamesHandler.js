const {  getVideogameById, searchByName, getAllVideogames, createVideogame, getPlatforms  } = require('../controllers/videoGamesController')


const getVideoGamesHandler = async (req,res)=>{
    const { name } = req.query;
    const results = name ?  await searchByName(name) : await getAllVideogames() 

    res.status(200).json(results);
};



const getDetailHandler = async (req,res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'BDD' : 'Api';

    try{
        const videoGame = await getVideogameById(id, source);
        res.status(200).json(videoGame);
    }catch (error){
        res.status(400).json({ error: error.message });
    }
    
};



const postVideoGamesHandler = async (req,res) => {
    const { name, description, platforms, background_image, released, rating, genres} = req.body;    
    try {
        const newVideogame = await createVideogame({name, description, platforms, background_image, released, rating, genres});
        res.status(201).json(newVideogame);
    } catch (error) {
        res.status(400).json({ error: error.message});        
    }
};

const getPlatformsHandler = async (req,res) => {        
    try{
        const platforms = await getPlatforms();
        res.status(201).json({platforms});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};



module.exports={
    getVideoGamesHandler,
    getDetailHandler,
    postVideoGamesHandler,
    getPlatformsHandler
}

