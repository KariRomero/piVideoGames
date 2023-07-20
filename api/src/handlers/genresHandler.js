const { createGenres } = require ('../controllers/genresController')

const getGenresHandler = async (req,res) => {        
    try{
        const newGenre = await createGenres();
        res.status(201).json(newGenre);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = { getGenresHandler }