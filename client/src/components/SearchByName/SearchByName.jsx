import style from './SearchByName.module.css';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';


const SearchByName = () => {
    const videogameSearch = useSelector((state)=>state.videogameSearch);
    return(
        <div className={style.container}>
            {videogameSearch && videogameSearch.map(videogame=>{
                return <Card
                id={videogame.id}
                name={videogame.name}
                genres={videogame.genres}
                image={videogame.background_image}                
                />
            })}
        </div>
    )
};

export default SearchByName;