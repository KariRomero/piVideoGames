import style from './SearchBar.module.css';
import { searchByName } from '../../redux/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
   // const allVideogames = useSelector((state) => state.videogames);
    const [name, setName] = useState('');
    
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleOnClick = () => {
        if (!name) {
            alert('Input empty !');
        } else {
            dispatch(searchByName(name));
            setName('');           
        } 
    };   
 
    return(
        <div className={style.container}>

            <input value={name} onChange={handleInputChange} type='search' className={style.input} placeholder='Search...'/>            
            <button onClick={handleOnClick} className={style.button}>Search</button>           

      </div>
    )
};

export default SearchBar;

