import { GET_VIDEOGAMES } from './action-types';


const initialState = {
    videogames: [],
}

const reducer = (state = initialState,action) => {
    switch (action.type){
        case GET_VIDEOGAMES:
            return{
                ...state, 
                videogames: action.payload
            };
        default:
            return{...state};
    }
};

export default reducer;