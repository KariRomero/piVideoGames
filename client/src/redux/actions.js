import axios from 'axios';
import { GET_VIDEOGAMES } from './action-types';

export function getVideogames(){
    return async function (dispatch){
        const response = await axios.get('http://localhost:3001/videogames');
        const apiVideogames = response.data;
        return dispatch({type: GET_VIDEOGAMES, payload: apiVideogames});
    }
};