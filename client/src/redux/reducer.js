import { 
    GET_VIDEOGAMES, 
    GET_VIDEOGAME, 
    SEARCH_BY_NAME, 
    CLEAR_SEARCH, 
    GET_GENRES,
    FILTER_BY_GENRES,
    FILTER_BY_ORDER, 
    FILTER_BY_ORIGIN
} from './action-types';


const initialState = {
    videogames: [],
    videogame:[],
    videogameSearch:[],
    allGenres: [],
    copia:[]
    
}

const reducer = (state = initialState,action) => {
    switch (action.type){
        case GET_VIDEOGAMES:
            return{
                ...state, 
                videogames: action.payload,
                copia: action.payload
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
            };
        case CLEAR_SEARCH:
            return{
                ...state,
                videogameSearch:[],
            };
        case GET_GENRES:
            return{
                ...state,
                allGenres: action.payload
            };
        case FILTER_BY_ORIGIN:
            let getVg = state.copia;
                let filtrado = []
    
                switch(action.payload) {
                    case 'api': filtrado = getVg.filter(el => typeof (el.id) === 'number'); break;
                    case 'created': filtrado = getVg.filter(el => isNaN(el.id)); break;
                    default: filtrado = getVg; break;
                }
                return {
                    ...state,
                    videogames: filtrado
                };
        case FILTER_BY_ORDER:
            let vgCopy = [...state.videogames]; //hago una copia de mi estado importante
            let ordenamiento

            switch (action.payload) {
                case 'All':
                    ordenamiento = [...state.videogames];
                    break;
                case 'A-Z':
                    ordenamiento = vgCopy.sort(function(a, b) {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1
                        }
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return -1
                        }
                        return 0;
                    });
                    break;
                case 'Z-A':
                    ordenamiento = vgCopy.sort(function(a, b) {
                        if(a.name.toLowerCase() < b.name.toLowerCase()) {
                            return 1;
                          }
                          if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1;
                          }
                          return 0;
                    })
                    break;
                case 'RatingAsc':
                    ordenamiento = vgCopy.sort(function(a, b) {
                        return a.rating - b.rating
                    })
                    break;
                case 'RatingDesc':
                    ordenamiento = vgCopy.sort(function(a, b) {
                        return b.rating - a.rating
                    })
                    break;
                default:
                    ordenamiento = vgCopy
                    break;
            }
            return {
                ...state,
                videogames: ordenamiento,
                copia : ordenamiento
            };
        case FILTER_BY_GENRES:
            let aux = [];
            if(action.payload) {
                aux = state.copia.filter(e => {
                    if(!e.genres){
                        return e.genres
                    }
                    else if(e.genres.some(e => e.name === action.payload)) {
                        return e.genres.map(el => el.name)
                    } else {
                        return e.genres.includes(action.payload)
                    }
                })
            } else {
                aux = state.copia
            }

            return {
                ...state,
                videogames: aux,
            }
        default:
            return{...state};
    }
};

export default reducer;