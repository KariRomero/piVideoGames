import axios from 'axios';
import { 
    GET_VIDEOGAMES, 
    GET_VIDEOGAME, 
    SEARCH_BY_NAME, 
    CLEAR_SEARCH, 
    GET_GENRES, 
    FILTER_BY_GENRES,
    FILTER_BY_ORDER,
    FILTER_BY_ORIGIN,
    CREATE_VIDEOGAME,
    CHANGE_PAGE,
    // DELETE_VIDEOGAME
} from './action-types';

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

export const clearSearch = () => {
    return{
        type: CLEAR_SEARCH,
    }
};

export const getGenres = () => {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/genres')
        const genres = response.data
        dispatch({ type: GET_GENRES, payload: genres });        
    }
};

export const filterByGenres = (payload) => {
    return{
        type: FILTER_BY_GENRES,
        payload,
    }
};

export const filterByOrder = (payload) => {
    return{
        type: FILTER_BY_ORDER,
        payload,
    }
};

export const filterByOrigin = (payload) => {
    return({
        type: FILTER_BY_ORIGIN,
        payload,
    })
};

export const createVideogame = (videogame) => {
    return async (dispatch)=>{
        try {
            console.log(videogame);
            const { data } = await axios.post(`http://localhost:3001/videogames`, videogame);
            return dispatch({
                type: CREATE_VIDEOGAME,
                payload: data
            });            
        } catch (error) {
            console.log(error);            
        }
    }
};

export const changePage = (page) => {
    return({
        type: CHANGE_PAGE,
        payload:page
    })
};





// export function deleteVideoGame(id) {
//     return function (dispatch) {
//         return axios
//             .delete(`/videogame/${id}`)
//             .then(({ data }) => {
//                 dispatch({ type: DELETE_VIDEOGAME, payload: data });
//             });
//     };
// }

