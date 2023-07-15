const { Router } = require('express');
const { getVideoGamesHandler, getDetailHandler, postVideoGamesHandler } = require ('../handlers/videoGamesHandler')


const videoGamesRouter = Router();

videoGamesRouter.get('/', getVideoGamesHandler);
videoGamesRouter.get('/:idVideogame', getDetailHandler);
videoGamesRouter.post('/', postVideoGamesHandler);

module.exports = videoGamesRouter