import style from './SearchBar.module.css';


const SearchBar = () => {

   
    return(
        <div className={style.container}>

            <input type='search' className={style.input} placeholder='Search...'/>
            <button className={style.button}>Search</button>

         {/* <input type='search' onChange={handleChange} value={name} className={style.input}/>
         <button onClick={()=>onSearch(name)} className={style.button}>Buscar</button> */}

      </div>
    )
};

export default SearchBar;