const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamesRouter = require ('./videoGamesRouter');
const genresRouter = require('./genresRouter');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videoGamesRouter);
router.use('/genres', genresRouter);

module.exports = router;
