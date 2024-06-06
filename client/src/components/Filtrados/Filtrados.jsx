import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres} from '../../redux/actions';
import style from './Filtrados.module.css';

const Filtrados = ({handleOrigin, handleGenres, handleOrder}) => {

    const dispatch = useDispatch() ;
    const generos = useSelector(state => state.allGenres);
   
    useEffect(() => { //
        dispatch(getGenres())        
    }, [])

    return (
        
        <div className={style.box}>

            <select onChange={e => handleOrder(e)}>
                <option value="" >Order</option>
                <option value="A-Z" >A-Z</option>
                <option value="Z-A" >Z-A</option>
                <option value="RatingAsc">Rating Asc</option>
                <option value="RatingDesc">Rating Desc</option>
            </select>

            <select id="genre" onChange={e => handleGenres(e)}>
                <option value=''>All</option>
                {generos && generos.map(g => {
                    return (
                        <option key={g.id} value={g.name}>{g.name}</option>
                    )
                })}
            </select>

            <select onChange={e => handleOrigin(e)}>
                <option value=''>All</option>
                <option value="api">Api</option>
                <option value="created">My games</option>
            </select>
                    
        </div>
    )
};

export default Filtrados;