const { getVideoGamesController, getDetailController, postVideoGamesController} = require('../controllers/videoGamesController')

const getVideoGamesHandler = getVideoGamesController;
const getDetailHandler = getDetailController;
const postVideoGamesHandler = postVideoGamesController; 

module.exports={
    getVideoGamesHandler,
    getDetailHandler,
    postVideoGamesHandler
}