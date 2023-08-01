import style from './SearchBar.module.css';
import { searchByName } from '../../redux/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const SearchBar = () => {

    const [name, setName] = useState('');
    
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleOnClick = () => {
        dispatch(searchByName(name));
        setName('');
        
    };

      
   
    return(
        <div className={style.container}>

            <input value={name} onChange={handleInputChange} type='search' className={style.input} placeholder='Search...'/>            
            <button onClick={handleOnClick} className={style.button}>Search</button>
            {/* {error && <p className={style.error}>{error}</p>} */}

      </div>

           

    )
};

export default SearchBar;

