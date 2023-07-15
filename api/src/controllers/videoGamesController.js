const getVideoGamesController = (req,res) => {
    const { name } = req.query;
    if(name) res.send (`NIY: Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query: ${name}`)
    else res.send('NIY: Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.')
};

const getDetailController = (req,res) => {
    const { idVideogame } = req.params;
    res.send(`NIY:Esta ruta obtiene el detalle de un videojuego específico de id: ${idVideogame}`)
};

const postVideoGamesController = (req,res) => {
    const { datosVideoGames } = req.body;
    res.send(`NIY: esta ruta recibirá los siguientes datos para crear un videojuego y relacionarlo con los generos solicitados:
    datos: ${datosVideoGames}`)
};

module.exports={
    getVideoGamesController,
    getDetailController,
    postVideoGamesController
};
