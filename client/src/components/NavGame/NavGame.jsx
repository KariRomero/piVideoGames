import SearchBar from '../SearchBar/SearchBar';
// import Filtrados from '../Filtrados/Filtrados';
import { getVideogames, filterByOrigin, filterByGenres, filterByOrder } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import style from './NavGame.module.css';


const NavGame = ()=>{

    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1)

    function handleOrigin(e) {
        e.preventDefault()
        if(e.target.value === '') {
            dispatch(getVideogames());
        } else {
            dispatch(filterByOrigin(e.target.value))
            setCurrentPage(1);
        }
      };
      
      function handleGenres(e) {
        e.preventDefault()
        if(e.target.value === '') {
            dispatch(getVideogames());
        } else {
            dispatch(filterByGenres(e.target.value))
            setCurrentPage(1);
        }
      };
      
      function handleOrder(e) {
        e.preventDefault()
        if(e.target.value === '') {
            dispatch(getVideogames());
        } else {
            dispatch(filterByOrder(e.target.value))
            setCurrentPage(1);
        }
      };
 
    return(
        <div className={style.container}>                        
            {/* <Filtrados handleOrigin={handleOrigin} handleGenres={handleGenres} handleOrder={handleOrder}/> */}
            <SearchBar/>
        </div>
    )
};

export default NavGame;