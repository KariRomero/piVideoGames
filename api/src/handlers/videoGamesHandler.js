const {  getVideogameById, searchByName, getAllVideogames, postVideoGamesController} = require('../controllers/videoGamesController')


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




const postVideoGamesHandler = postVideoGamesController; 

module.exports={
    getVideoGamesHandler,
    getDetailHandler,
    postVideoGamesHandler
}

