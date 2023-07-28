import axios from 'axios';
import { GET_VIDEOGAMES, GET_VIDEOGAME, SEARCH_BY_NAME } from './action-types';

export const getVideogames= () => {
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/videogames');
        const Videogames = response.data;
        dispatch({type: GET_VIDEOGAMES, payload: Videogames});
    }
};

export const getVideogame = (id) => {
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/videogames/${id}`);
        const Videogame = response.data;
        dispatch ({type: GET_VIDEOGAME, payload:Videogame});
    }
};

export const searchByName = (name) => {
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        const Videogame = response.data;
        dispatch ({type: SEARCH_BY_NAME, payload: Videogame});
    }
};




