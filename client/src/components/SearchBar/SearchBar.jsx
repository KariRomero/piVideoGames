import style from './SearchBar.module.css';
import { searchByName, getVideogames } from '../../redux/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';



const SearchBar = () => {
    
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleOnClick = () => {
        dispatch(searchByName(name));
        
    };

    // const handleReset = () =>{
    //     dispatch(getVideogames())
    //     setName('')
    // };

  
   
    return(
        <div className={style.container}>

            <input value={name} onChange={handleInputChange} type='search' className={style.input} placeholder='Search...'/>

            {/* <Link to={`/videogames?name=${name}`}> */}
            <button onClick={handleOnClick} className={style.button}>Search</button>
            {/* </Link> */}

            {/* <button className={style.button} onClick={handleReset}>Reset</button> */}


            



      </div>

           

    )
};

export default SearchBar;

