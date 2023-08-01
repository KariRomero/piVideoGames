import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres} from '../../redux/actions';
import style from './Filtrados.module.css';


const Filtrados = ({handleOrigin, handleGenres, handleOrder}) => {

    const dispatch = useDispatch() //el useDispatch devuelve el metodo dispatch que permite dispatchar acciones
    const generos = useSelector(state => state.allGenres)// el useSelector lee un valor del estado del store(reducer) y se suscribe a las actualizaciones del mismo.
    //console.log(generos)

    useEffect(() => { //
        dispatch(getGenres())
        //dispatch(getAllVideogames())
    }, [])


    return (
            <div className={style.box}>
                    <select onChange={e => handleOrder(e)}>
                        <option value="" >Ordenar por...</option>
                        <option value="A-Z" >A-Z</option>
                        <option value="Z-A" >Z-A</option>
                        <option value="RatingAsc">Rating Asc</option>
                        <option value="RatingDesc">Rating Desc</option>
                    </select>

                    <select id="genre" onChange={e => handleGenres(e)}>
                        <option value=''>Generos</option>
                        {generos && generos.map(g => {
                            return (
                                <option key={g.id} value={g.name}>{g.name}</option>
                            )
                        })}
                    </select>

                    <select onChange={e => handleOrigin(e)}>
                        <option value=''>Filtrar por Origen</option>
                        <option value="api">API</option>
                        <option value="created">Created</option>
                    </select>
                    {/* <button className={s.btn}onClick={e => handleRefresh(e)}>Refresh</button> */}
            </div>
    )
}

export default Filtrados;