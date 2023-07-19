const {  getVideogameById, searchByName, getAllVideogames, postVideoGamesController} = require('../controllers/videoGamesController')


const getVideoGamesHandler = (req,res)=>{
    const { name } = req.query;
    const results = name ? searchByName(name) : getAllVideogames() 

    if (name) res.sent('llamar a la funcion por nombre');
    else res.send('quiero enviar todos los usuarios');
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

