import style from './SearchBar.module.css';
import { searchByName } from '../../redux/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VscSearch } from "react-icons/vsc";
import { getVideogames, clearSearch } from '../../redux/actions';
import { FaRedo } from "react-icons/fa";

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

    const handleReset = () =>{
        dispatch(getVideogames());
       dispatch(clearSearch());
   };
 
    return(
        <div className={style.container}>

            <input value={name} onChange={handleInputChange} type='search' className={style.input} placeholder='Search...'/>            
            <button onClick={handleOnClick} className={style.button}>
                <VscSearch/>    
            </button>         
            <button className={style.button} onClick={handleReset}>
                <FaRedo/>
            </button>  

      </div>
    )
};

export default SearchBar;

