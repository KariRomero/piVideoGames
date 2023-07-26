import { GET_VIDEOGAMES, GET_VIDEOGAME, SEARCH_BY_NAME } from './action-types';


const initialState = {
    videogames: [],
    videogame:[],
    videogameSearch:[],
}

const reducer = (state = initialState,action) => {
    switch (action.type){
        case GET_VIDEOGAMES:
            return{
                ...state, 
                videogames: action.payload
            };
        case GET_VIDEOGAME:
            return{
                ...state,
                videogame: action.payload
            };
        case SEARCH_BY_NAME:
            return{
                ...state,
                videogameSearch: action.payload
            }
        default:
            return{...state};
    }
};

export default reducer;