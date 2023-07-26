import style from './SearchBar.module.css';
import { searchByName } from '../../redux/actions';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';



const SearchBar = () => {

    
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleOnClick = () => {
        dispatch(searchByName(name));
        
    };
   
    return(
        <div className={style.container}>

            <input value={name} onChange={handleInputChange} type='search' className={style.input} placeholder='Search...'/>
            <button onClick={handleOnClick} className={style.button}>Search</button>

         {/* <input type='search' onChange={handleChange} value={name} className={style.input}/>
         <button onClick={()=>onSearch(name)} className={style.button}>Buscar</button> */}

      </div>
    )
};

export default SearchBar;