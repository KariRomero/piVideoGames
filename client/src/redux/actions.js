import axios from 'axios';
import { GET_VIDEOGAMES, GET_VIDEOGAME } from './action-types';

export const getVideogames= () => {
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/videogames');
        const apiVideogames = response.data;
        return dispatch({type: GET_VIDEOGAMES, payload: apiVideogames});
    }
};

export const getVideogame = (id) => {
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/videogames/${id}`);
        const apiVideogame = response.data;
        return dispatch ({type: GET_VIDEOGAME, payload:apiVideogame});
    }
}


