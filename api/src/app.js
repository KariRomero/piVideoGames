const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';


const corsOptions = {
    origin: 'https://videogames-application.vercel.app', 
    credentials: true, // permite cookies
};

server.use(cors(corsOptions));

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.use('/', routes);


server.use((err, req, res, next) => { 
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
