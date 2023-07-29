const { Router } = require('express');
const { getVideoGamesHandler, getDetailHandler, postVideoGamesHandler, getPlatformsHandler } = require ('../handlers/videoGamesHandler')


const videoGamesRouter = Router();

videoGamesRouter.get('/', getVideoGamesHandler);
videoGamesRouter.get('/:id', getDetailHandler);
videoGamesRouter.get('/platforms', getPlatformsHandler);
videoGamesRouter.post('/', postVideoGamesHandler);

module.exports = videoGamesRouter