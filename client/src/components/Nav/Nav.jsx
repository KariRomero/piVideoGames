import style from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { getVideogames, clearSearch } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const Nav = () => {

    const dispatch = useDispatch();

     const handleReset = () =>{
         dispatch(getVideogames());
        dispatch(clearSearch());
    };

    
    return(
        <div className={style.container}>

            <Link to='/form' className={style.link}>
                <button className={style.button}>New Game</button>
            </Link>

            <Link to='/home' className={style.link}>
                <button className={style.button}>Home</button>
            </Link>     

            <button className={style.button} onClick={handleReset}>Reset</button>                 

            <SearchBar/>
        </div>
    )
};

export default Nav;